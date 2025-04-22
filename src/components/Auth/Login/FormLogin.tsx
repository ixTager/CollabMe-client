import { FormEvent, useState } from "react";
import SubmitBtn from "../SubmitBtn";
import useSendData from "../../../features/Auth/Login/useSendData";

export default function FormLogin() {
    const [login, setLogin] = useState<string>("");
    const [passw, setPassw] = useState<string>("");

    const submit = () => useSendData({login, passw});
    const formSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        submit();
    } 

    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <form className="flex" onSubmit={(e) => formSubmit(e)}>
                <fieldset className="space-y-2">
                    <legend>Login Form</legend>

                    <div className="space-x-1">
                        <label htmlFor="login">Login</label>

                        <input
                        type="text" name="login"
                        id="login" placeholder="Login"
                        value={login} onChange={(e) => setLogin(e.target.value)}/>
                    </div>

                    <div className="space-x-1">
                        <label htmlFor="passw">Password</label>
                        <input type="password" name="passw"
                        id="passw" placeholder="Password"
                        value={passw} onChange={(e) => setPassw(e.target.value)}/>
                    </div>
                    
                    <SubmitBtn click={submit} />
                </fieldset>
            </form>

        </div>
);
}