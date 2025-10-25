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
import z from "zod";
const schema = z.object({
  email: z.email({ error: "Invalid Type Email." }),
  password: z
    .string({ error: "Invalid Type Password" })
    .length(6, "Password must be 6 Character."),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validatedData = schema.safeParse({
      ...Object.fromEntries(formData),
    });
    if (!validatedData.success) {
      alert(Object.values(validatedData.error.flatten().fieldErrors));
    }

    const res = await fetch("/api/login", {
        method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData.data),
      credentials: "include", // browser will save HttpOnly cookies
    });
    console.log("=====>",await res.json());
    try {
    } catch (error) {
      console.error(error);
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
