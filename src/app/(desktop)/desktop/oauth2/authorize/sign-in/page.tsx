import { Suspense } from "react";
import { Login } from "@/features/login";

export default async function LoginPage() {
  return (
    <Suspense fallback={null}>
      <Login isDesktop />
    </Suspense>
  );
}
