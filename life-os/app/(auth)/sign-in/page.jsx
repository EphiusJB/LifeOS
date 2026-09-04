"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AuthCard,
  AuthHeading,
  FormField,
  TextInput,
  PasswordInput,
  SubmitButton,
  AlertBanner,
} from "@/components/auth/AuthPrimitives";
import { useAuthStore } from "@/lib/store/AuthStore";

export default function SignInPage() {
  const router = useRouter();

  // Consume auth store actions and state
  const signIn = useAuthStore((s) => s.signIn);
  const storeLoading = useAuthStore((s) => s.loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate  before triggering loading state
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const result = await signIn({ email, password });

      if (result?.error) {
        setError(
          typeof result.error === "string"
            ? result.error
            : result.error.message || "Failed to sign in"
        );
        setIsSubmitting(false);
        return;
      }

      // Redirect on success
      router.push("/");
      router.refresh();
    } catch (err) {
      setError(err?.message ?? "Invalid email or password");
      setIsSubmitting(false);
    }
  };

  const isLoading = storeLoading || isSubmitting;

  return (
    <AuthCard>
      <AuthHeading title="Welcome back" subtitle="to LiOS" />

      <AlertBanner type="error" message={error} />

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <FormField label="Email address" error={errors.email}>
          <TextInput
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            autoComplete="email"
            autoFocus
          />
        </FormField>

        <FormField label="Password" error={errors.password}>
          <PasswordInput
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            autoComplete="current-password"
          />
          <div className="flex justify-end mt-1">
            <Link
              href="/forgot-password"
              className="text-[12px] font-medium hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              Forgot password?
            </Link>
          </div>
        </FormField>

        <SubmitButton loading={isLoading}>
          {isLoading ? "Signing in…" : "Sign in"}
        </SubmitButton>
      </form>

      <p
        className="text-center text-[13px]"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-semibold hover:underline"
          style={{ color: "var(--color-primary)" }}
        >
          Create one free
        </Link>
      </p>
    </AuthCard>
  );
}