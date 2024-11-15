import { toast } from "sonner";
import { useLoading } from "@/contexts/loading";
import { useSearchParams } from "next/navigation";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase";
import { firebaseClient } from "@/services/firebase/firebase-client";

export function useSocialLogin() {
  const { setIsLoading } = useLoading();
  const searchParams = useSearchParams();
  const state = searchParams.get("state");
  const redirect_uri = searchParams.get("redirect_uri");

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      const provider = new firebaseClient.auth.GoogleAuthProvider();
      const { user } = await firebaseClient.auth().signInWithPopup(provider);
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

  return { loginWithGoogle };
}
