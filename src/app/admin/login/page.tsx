import { LoginForm } from "@/components/admin/LoginForm";
import Nav from "@/components/ui/custom/Nav";

export default function LoginPage(){
    return(
        <div className="h-screen">
            <Nav/>
            <LoginForm/>
            
        </div>
    )
}