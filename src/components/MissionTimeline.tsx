import React from 'react';
import { Calendar, Radio, Rocket } from 'lucide-react';

const missions = [
  {
    year: '1976',
    name: 'Viking 1',
    description: 'First successful landing on Mars',
    icon: Radio,
    status: 'past'
  },
  {
    year: '2012',
    name: 'Curiosity Rover',
    description: 'Exploring Gale Crater',
    icon: Rocket,
    status: 'present'
  },
  {
    year: '2024',
    name: 'Future Mission',
    description: 'First human settlement preparation',
    icon: Calendar,
    status: 'future'
  }
];

export default function MissionTimeline() {
  return (
    <section id="missions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Mission Timeline
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission) => {
            const Icon = mission.icon;
            return (
              <div
                key={mission.name}
                className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{mission.year}</h3>
                <h4 className="text-xl text-red-400 mb-2">{mission.name}</h4>
                <p className="text-gray-400">{mission.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}