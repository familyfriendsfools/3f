import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPropsWithoutRef } from "react";

export function LoginForm({
  className,
  ...props
}: ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path
              fill="#4285F4"
              d="M23.494 12.27c0-.818-.07-1.6-.195-2.35H12v4.46h6.555c-.3 1.53-1.163 2.82-2.425 3.68v3.06h3.905c2.286-2.11 3.59-5.21 3.59-8.85z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.905-3.06c-1.08.72-2.45 1.15-4.025 1.15-3.095 0-5.725-2.09-6.665-4.9H1.28v3.08C3.255 21.13 7.285 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.335 14.28c-.25-.72-.39-1.49-.39-2.28s.14-1.56.39-2.28V6.64H1.28A11.955 11.955 0 0 0 0 12c0 1.92.44 3.74 1.28 5.36l4.055-3.08z"
            />
            <path
              fill="#EA4335"
              d="M12 4.78c1.77 0 3.35.61 4.61 1.8l3.435-3.44C17.95 1.08 15.24 0 12 0 7.285 0 3.255 2.87 1.28 6.64l4.055 3.08c.94-2.81 3.57-4.94 6.665-4.94z"
            />
          </svg>
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
