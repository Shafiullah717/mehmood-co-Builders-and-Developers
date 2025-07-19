// components/services/ServiceProcess.tsx
interface ServiceProcessProps {
  processSteps: string[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ processSteps }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-medium p-6 md:p-8">
      <ol className="relative border-l-2 border-primary space-y-8 pl-6 md:pl-8">
        {processSteps.map((step, index) => (
          <li key={index}>
            <div className="absolute w-5 h-5 bg-primary rounded-full mt-1.5 -left-2.5 border border-white flex items-center justify-center text-white text-xs font-bold">
              {index + 1}
            </div>
            <p className="text-dark text-lg md:text-xl font-semibold mb-2">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ServiceProcess;