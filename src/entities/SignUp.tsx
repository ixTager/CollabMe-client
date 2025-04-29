import { Form } from "../components/Auth/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {

    const handleSignUp = (email:string, password:string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return(
        <>
            <Form 
            title="Sign Up" 
            handleClick={(email:string, password:string) => handleSignUp(email, password)} 
            />
        </>
        
    );
}