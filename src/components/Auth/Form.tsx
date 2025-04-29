import { useState } from "react";

interface FormData {
    title: string;
    handleClick: (email: string, password: string) => void;
  }
  
export const Form = ({ title, handleClick }: FormData) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    return (
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
  
        <div>
          <label htmlFor="passw">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="passw"
            id="passw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <button onClick={() => handleClick(email, password)}>
          {title}
        </button>
      </div>
    );
};
  