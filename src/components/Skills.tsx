import React from 'react';
import { Camera, Edit, Users, MessageSquare } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: Edit,
      title: "Storytelling",
      description: "Crafting compelling narratives that engage and inspire audiences"
    },
    {
      icon: Camera,
      title: "Direction",
      description: "Strong vision and ability to bring stories to life through film"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience in leading and coordinating creative teams"
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Excellent interpersonal and presentation skills"
    }
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gold-500">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-dark-800 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <skill.icon className="w-12 h-12 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}