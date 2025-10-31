import { Briefcase, Shield, Trees } from "lucide-react";
import { BsPeople } from "react-icons/bs";
import { CgCross } from "react-icons/cg";
import { TbTools } from "react-icons/tb";

// Reusable Value Component
function Value({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
}

const Values = () => {
  return (
    <section className="py-6 ">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          <Value
            icon={<Shield className="w-8 h-8 text-green-700" />}
            label="Integrity"
          />
          <Value
            icon={<CgCross className="w-8 h-8 text-green-700" />}
            label="Faith"
          />
          <Value
            icon={<BsPeople className="w-8 h-8 text-green-700" />}
            label="Community"
          />
          <Value
            icon={<Trees className="w-8 h-8 text-green-700" />}
            label="Growth"
          />
          <Value
            icon={<TbTools className="w-8 h-8 text-green-700" />}
            label="Excellent Service"
          />
          <Value
            icon={<Briefcase className="w-8 h-8 text-green-700" />}
            label="Professionalism"
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
