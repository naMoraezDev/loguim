import { toast } from "sonner";
import { useLoading } from "@/contexts/loading";
import { useSearchParams } from "next/navigation";
import { SignInSchema } from "@/schemas/sign-in.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignIn() {
  const { setIsLoading } = useLoading();
  const searchParams = useSearchParams();
  const state = searchParams.get("state");
  const redirect_uri = searchParams.get("redirect_uri");

  async function onSubmit(data: typeof SignInSchema._type) {
    setIsLoading(true);
    try {
      const { user } = await firebaseClient
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      if (user) {
        const authorization_token = await user.getIdToken();
        const callback_url = `${redirect_uri}?authorization_token=${authorization_token}&state=${state}`;
        window.location.href = callback_url;
      }
    } catch (error: any) {
      toast.error(getFirebaseErrorMessage(error.code));
      setIsLoading(false);
    }
  }

  return { onSubmit };
}
