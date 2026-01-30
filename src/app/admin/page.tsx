import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Admin(){
    return(
        <div className="flex flex-col items-center h-full w-full">
            <nav className="flex p-4 gap-4 items-center justify-center w-screen overflow-scroll">
                <Button>Home</Button>
                <Button>Login</Button>
            </nav>

            <div>
                Welcome to the WTR Software Suite
            </div>

            <div className="grid grid-cols-2">
                <Card>
                    
                </Card>
            </div>
        </div>
    )
}