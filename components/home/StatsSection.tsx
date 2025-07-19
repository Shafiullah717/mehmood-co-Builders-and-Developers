// components/home/StatsSection.tsx
import { Building, Clock, Users } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years in Business', icon: <Clock /> },
  { value: '50+', label: 'Projects Completed', icon: <Building /> },
  { value: '1000+', label: 'Happy Families', icon: <Users /> },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-light p-8 rounded-xl border-l-4 border-secondary shadow-md transform hover:-translate-y-2 transition-transform">
              <div className="flex justify-center text-primary mb-4">
                {/* Clone icon to add classes */}
                {stat.icon && (
                  <div className="w-16 h-16">{stat.icon}</div>
                )}
              </div>
              <p className="text-5xl font-bold text-secondary">{stat.value}</p>
              <h3 className="text-xl text-primary mt-2">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;