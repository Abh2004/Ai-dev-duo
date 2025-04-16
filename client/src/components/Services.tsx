import { serviceData } from "@/lib/utils";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mobile App Development & Digital Transformation
          </h2>
          <p className="text-[#AAAAAA] max-w-3xl mx-auto">
            Our comprehensive suite of software development and digital services 
            designed to transform your business and elevate your digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
