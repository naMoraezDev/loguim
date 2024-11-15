import { toast } from "sonner";
export { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/loading";
import { useSearchParams } from "next/navigation";
import { SignUpSchema } from "@/schemas/sign-up.schema";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSignUp() {
  const { setIsLoading } = useLoading();
  const searchParams = useSearchParams();
  const state = searchParams.get("state");
  const redirect_uri = searchParams.get("redirect_uri");

  async function onSubmit(data: typeof SignUpSchema._type) {
    setIsLoading(true);
    try {
      const { user } = await firebaseClient
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      if (user) {
        await user.updateProfile({ displayName: data.name });
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
