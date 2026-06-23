import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Ashish Sinha";
  }, []);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-syne text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 font-syne text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-mid">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
