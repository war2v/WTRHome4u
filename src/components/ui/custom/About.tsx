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
    <section className="w-full flex justify-center  px-4 my-10 py-10">
      <div className=" flex flex-col max-w-6xl gap-10 items-center justify-center  w-full">
        <h2 className="text-3xl md:text-4xl font-bold  text-green-700">
          The WTR Capital Mission
        </h2>
        <h3 className="text-2xl font-semibold text-gray-500 italic">
          The Heart Behind What We Do{" "}
        </h3>
        <div className="flex flex-col max-w-6xl gap-10 w-full items-center ">
          <p className="text-gray-600 max-w-2xl ">
            <span className="text-green-700 font-bold">Our mission</span> is
            rooted in{" "}
            <span className="text-green-700 font-bold">
              faith, integrity, and service
            </span>
            . WTR Capital has been managing and enhancing residential and
            commercial properties across Middle Tennessee for over a decade.
          </p>

          <p className="text-gray-600 max-w-2xl ">
            We build{" "}
            <span className="text-green-700 font-bold">
              long-term relationships
            </span>{" "}
            with owners and tenants through{" "}
            <span className="text-green-700 font-bold">
              reliable, value-driven management.
            </span>
          </p>
        </div>

        <div className="grid  md:grid-cols-4 sm:grid-cols-2 gap-6">
          <StatCard
            icon={<Clock className="text-green-700 w-10 h-10" />}
            value="10+"
            label="Years of Service"
          />
          <StatCard
            icon={<HomeIcon className="text-green-700 w-10 h-10" />}
            value="14"
            label="Portfolios Managed"
          />
          <StatCard
            icon={<HomeIcon className="text-green-700 w-10 h-10" />}
            value="124"
            label="Properties Managed"
          />
          <StatCard
            icon={<Users className="text-green-700 w-10 h-10" />}
            value="12"
            label="Owners Served"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
