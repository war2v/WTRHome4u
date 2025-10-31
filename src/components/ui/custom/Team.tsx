import Image from "next/image"
import { Card } from "../card"
import { Kanban } from "lucide-react"

export const Team = () => {
    return(
        <div className="p-4 my-10 py-10">

            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-green-700">Our Leadership Team</h1>
                <p className="text-gray-500">
                    At WTR Capital, our strength lies in the experience, integrity, and vision of our leadership. 
                    With decades of combined expertise in real estate investment, property management, and business operations, 
                    our team is dedicated to building sustainable communities and creating long-term value for our partners and residents alike.
                </p>
                <p className="text-gray-500">
                    We bring together a deep understanding of asset development, financial strategy, and community growth 
                    to transform properties into thriving investments. Guided by a commitment to excellence and innovation, the 
                    WTR Capital leadership team ensures every project reflects our core values — quality, accountability, and positive impact.
                </p>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 items-center justify-center bg-  gap-6 my-10 py-10">
                <Card className=" flex flex-col items-center p-2 h-full text-gray-600">
                    <Image src='/teresa.png' alt="Warren.jpg" className="rounded-lg" width={500} height={500}/>
                    <ul className="flex flex-col gap-2 justify-end ">
                        <li className="text-2xl font-bold text-green-700">Vice President</li>
                        <li className="text-lg font-semibold">Teresa Russell</li>
                        <li className="text-sm flex"><Kanban/>20+ years of experience in administration, financial management, and operations.</li>
                        <li className="text-sm flex"><Kanban/>Former Department Administrator at Meharry Medical College (5+ years).</li>
                        <li className="text-sm flex"><Kanban/>Skilled in Tax Preparation, General Ledger Management, and Financial Administration.</li>
                    </ul>
                </Card>
                
                <Card className="flex flex-col items-center p-2 h-full text-gray-600">
                    <Image src='/warren.png' alt="warren.png" className="p-2 rounded-lg" width={500} height={500}/>
                    <ul className="flex flex-col gap-2">
                        <li className="text-2xl font-bold text-green-700">President</li>
                        <li className="text-lg font-semibold">Warren Russell</li>
                        <li className="text-sm flex"><Kanban/>20+ years of executive experience driving operational excellence, real estate development, and property asset optimization</li>
                        <li className="text-sm flex"><Kanban/>Specializes in property acquisition, redevelopment, and management of high-value real estate assets</li>
                    </ul>
                </Card>
                <Card className="flex flex-col items-center p-2 h-full text-gray-600"> 
                    <Image src='/alex.png' alt="Warren.jpg" className="p-2 rounded-lg" width={500} height={500} />
                    <ul className="flex flex-col gap-2">
                        <li className="text-2xl font-bold text-green-700">IT Specialist</li>
                        <li className="text-lg font-semibold">Alex Russell</li>
                        <li className="text-sm flex"><Kanban/>Full-Stack Developer with a B.S. in Computer Science from Middle Tennessee State University.</li>
                        <li className="text-sm flex"><Kanban/>Specializes in building efficient, user-focused web and applications, leveraging technologies like Modern Technologies</li>
                    </ul>
                </Card>
            </div>
        </div>
    )
}