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
        <h3 className="text-4xl font-bold text-emerald-600 mt-2">{value}</h3>
        <p className="mt-2 text-gray-700">{label}</p>
      </CardContent>
    </Card>
  );
}

const About = () => {
    return ( 
        <section className="py-4 px-4 bg-gray-50 pt-30">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-6xl p-10 md:text-4xl font-semibold mb-6 text-emerald-600 bg-emerald-500 rounded-md">
                    <span className="text-white">The Soul of WTR Capital</span>
                </h2>
                <p className="text-gray-600 text-2xl mb-12">
                      With a mission rooted in <span className="font-semibold text-emerald-500">faith</span>, <span className="font-semibold text-emerald-500">integrity</span>, and <span className="font-semibold text-emerald-500">service</span>, WTR Capital
                      has been managing and enhancing residential and commercial
                      properties across Middle Tennessee for over a decade. <span className="font-semibold text-emerald-500">We build
                      long-term relationships with owners and tenants through reliable,
                      value-driven management.</span>
                  </p>
                

                  <div className="grid grid-cols-2 gap-10">
                      <StatCard
                      icon={<Clock className="text-emerald-600 w-10 h-10" />}
                      value="10+"
                      label="Years of Service"
                      />
                      <StatCard
                      icon={<HomeIcon className="text-emerald-600 w-10 h-10" />}
                      value="14"
                      label="Portfolios Managed"
                      />
                      <StatCard
                      icon={<HomeIcon className="text-emerald-600 w-10 h-10" />}
                      value="124"
                      label="Properties Managed"
                      />
                      <StatCard
                      icon={<Users className="text-emerald-600 w-10 h-10" />}
                      value="12"
                      label="Owners Served"
                      />
                  </div>
                
            </div>
        </section>
     );
}
 
export default About;