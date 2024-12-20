import { Metadata } from "next";
import { Suspense } from "react";
import { Login } from "@/features/login";

export const metadata: Metadata = {
  title: "Login | eCrew",
  description:
    "Faça login na nossa plataforma e acesse conteúdo exclusivo. Insira suas credenciais e aproveite!",
};

export default async function LoginPage() {
  return (
    <Suspense fallback={null}>
      <Login />
    </Suspense>
  );
}
