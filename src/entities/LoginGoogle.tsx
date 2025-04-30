import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const LoginGoogle = () =>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signWithGoogle = () =>{
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          });
    }

    return(
        <button onClick={signWithGoogle}>
            Sign with Google
        </button>
    );
    
}