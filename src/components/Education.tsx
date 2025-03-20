import React from 'react';
import { GraduationCap, Award, Film } from 'lucide-react';

export default function Education() {
  const education = [
    {
      title: "Diploma in Script Writing & Film Direction",
      institution: "Ayjo's Nova Educational Institutions Pvt Ltd",
      icon: Film,
      year: "2018"
    },
    {
      title: "BCom Travel & Tourism",
      institution: "KVVS College of Science & Technology",
      icon: GraduationCap,
      year: "2017"
    },
    {
      title: "Documentary: Save Alappad Stop Mining",
      description: "Documentary against black sand mining",
      icon: Award,
      year: "2019"
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gold-500">
          Education & Training
        </h2>
        
        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((item, index) => (
            <div key={index} className="flex items-start gap-6 bg-dark-700 p-6 rounded-lg">
              <div className="flex-shrink-0">
                <item.icon className="w-8 h-8 text-gold-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.institution}</p>
                {item.description && (
                  <p className="text-gray-400 mt-2">{item.description}</p>
                )}
                <p className="text-gold-500 mt-2">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}