import { House, Lock } from "lucide-react"
import { Card, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { SiExpress } from "react-icons/si"

export const LoginForm = () => {
    return(
        <div className="h-full w-full flex justify-center items-center">
            <Card className="w-2/4 p-4">
                <CardHeader className="flex items-center justify-start">
                    <h1 className="flex items-center  text-4xl">WTR Admin <House size={40}/>  </h1>
                    
                </CardHeader>
                <form className="flex flex-col gap-4">
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Button>Login</Button>
                </form>
            </Card>
        </div>
    
    )
}