import { Form } from "../components/Auth/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginGoogle } from "./LoginGoogle";


export const LoginPassw = () => {
    const handleLogin = (email:string, password:string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.error(error);
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return(
        <>
            <Form title="Sign In" handleClick={() => handleLogin}/>
            <LoginGoogle />
        
        </>
    );
}