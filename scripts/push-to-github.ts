import { Octokit } from '@octokit/rest'
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function main() {
  const repoName = process.argv[2] || 'global-media-reach';
  
  console.log('Connecting to GitHub...');
  const octokit = await getUncachableGitHubClient();
  
  const { data: user } = await octokit.rest.users.getAuthenticated();
  console.log(`Authenticated as: ${user.login}`);
  
  let repo;
  try {
    const { data } = await octokit.rest.repos.get({
      owner: user.login,
      repo: repoName,
    });
    repo = data;
    console.log(`Repository "${repoName}" already exists.`);
  } catch (error: any) {
    if (error.status === 404) {
      console.log(`Creating repository "${repoName}"...`);
      const { data } = await octokit.rest.repos.createForAuthenticatedUser({
        name: repoName,
        description: 'Global Media Reach - Digital Advertising Agency Website',
        private: false,
        auto_init: false,
      });
      repo = data;
      console.log(`Repository created: ${repo.html_url}`);
    } else {
      throw error;
    }
  }
  
  console.log(`\nRepository URL: ${repo.html_url}`);
  console.log(`Clone URL: ${repo.clone_url}`);
  console.log('\nTo push your code, run these commands in the Shell:');
  console.log(`  git remote add github ${repo.clone_url}`);
  console.log('  git push -u github main');
}

main().catch(console.error);
