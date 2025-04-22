import { useEffect } from "react";

interface Data {
    login: string
    passw: string
}

export default function useSendData({login, passw} : Data) {
    useEffect(() =>{
        if (login && passw) {
            // Send to server
        }
    }, [])
}