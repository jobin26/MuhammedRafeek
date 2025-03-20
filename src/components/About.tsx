import React from 'react';
import { Pen, Video } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Pen className="w-6 h-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Writer</h3>
                  <p className="text-gray-400">Passionate storyteller with experience in crafting compelling scripts and narratives that resonate with audiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Video className="w-6 h-6 text-gold-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Director</h3>
                  <p className="text-gray-400">Aspiring director with a strong vision for translating stories into powerful visual experiences.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>With a deep passion for cinema and storytelling, I've dedicated myself to mastering the art of filmmaking. My journey includes directing several impactful short films and documentaries that address social issues and human experiences.</p>
              <p>Currently seeking opportunities as an assistant director in feature films, I bring a unique perspective and unwavering dedication to every project I undertake.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}