import { House, List, MessageCircle } from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "../lib/contexts/AuthContext";

export default function Header(){
    return <nav className=" flex justify-between items-center  px-7 py-7 border-b">
        <h1 className=" text-2xl">Lyeana</h1>
        <ul className="  flex gap-6 items-center">
            <li className=" flex items-center gap-2"> 
                <House/>
                Home</li>
            <li className=" flex items-center gap-2">
                <List/>
           Blogs</li>
          <li className=" flex items-center gap-2">
            <MessageCircle/>
            Contact Us</li>
        </ul>
        <AuthContextProvider>
        <LoginButton/>
        </AuthContextProvider>

    </nav>
}