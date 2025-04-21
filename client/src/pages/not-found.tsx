import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] hover:shadow-[0_0_15px_rgba(240,90,40,0.6)] transition-all duration-300">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}