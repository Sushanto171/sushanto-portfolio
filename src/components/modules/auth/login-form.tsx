/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import z from "zod";
const schema = z.object({
  email: z.string().email({ error: "Invalid Type Email." }),
  password: z
    .string({ error: "Invalid Type Password" })
    .length(6, "Password must be 6 Character."),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [searchParams] = useSearchParams();

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");

    const formData = new FormData(e.currentTarget);
    const validatedData = schema.safeParse(Object.fromEntries(formData));

    if (!validatedData.success) {
      toast.dismiss(toastId);
      toast.error("Please check your input fields.");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData.data),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");
      toast.success(data.message || "Login successful!");
      router.push(searchParams[1] || "/");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-lg">Login Now</CardTitle>
          <CardDescription className="sr-only">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formHandler}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                  defaultValue="sushantokumar171@gmail.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  defaultValue="123456"
                  required
                />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
