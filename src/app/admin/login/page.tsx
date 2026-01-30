import { LoginForm } from "@/components/admin/LoginForm";

export default function LoginPage(){
    return(
        <div className="h-screen">
            <div className="flex  w-full h-full items-center justify-center">
                <LoginForm/>
            </div>
        </div>
    )
}