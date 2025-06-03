import { Clock, HomeIcon, Users } from "lucide-react";
import { Card, CardContent } from "../card";

// Reusable Stat Card Component
function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <Card className="text-center shadow-md">
      <CardContent className="py-8 flex flex-col items-center">
        {icon}
        <h3 className="text-4xl font-bold text-green-700 mt-2">{value}</h3>
        <p className="mt-2 text-gray-700">{label}</p>
      </CardContent>
    </Card>
  );
}

const About = () => {
    return ( 
        <section className="py-4 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
                    About WTR Capital
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    With a mission rooted in faith, integrity, and service, WTR Capital
                    has been managing and enhancing residential and commercial
                    properties across Middle Tennessee for over a decade. We build
                    long-term relationships with owners and tenants through reliable,
                    value-driven management.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard
                    icon={<Clock className="text-green-700 w-10 h-10" />}
                    value="10+"
                    label="Years of Service"
                    />
                    <StatCard
                    icon={<HomeIcon className="text-green-700 w-10 h-10" />}
                    value="10+"
                    label="Portfolios Managed"
                    />
                    <StatCard
                    icon={<HomeIcon className="text-green-700 w-10 h-10" />}
                    value="100+"
                    label="Properties Managed"
                    />
                    <StatCard
                    icon={<Users className="text-green-700 w-10 h-10" />}
                    value="10+"
                    label="Owners Served"
                    />
                </div>
            </div>
        </section>
     );
}
 
export default About;