import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Black Santa",
    category: "Short Film",
    status: "Completed",
    image: "../../assets/ShortFilm/BlackSanta.jpg",
    videoSrc:true,
    video: (
      <>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nDPeFqCUF18?si=2Z3qkrJRToA37JRv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </>
    ),
    description: "A heartwarming tale of hope and giving"
  },
  {
    title: "Niyogam",
    category: "Short Film",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80",
    videoSrc:true,
    video: (
      <>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nDPeFqCUF18?si=2Z3qkrJRToA37JRv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </>
    ),
    description: "An emotional journey of self-discovery"
  },
  {
    title: "Njanum Manushyan",
    category: "Social Awareness",
    status: "Completed",
    image: "../../assets/ShortFilm/Njanum Manushan.jpg",
    videoSrc:true,
    video: (
      <>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3qh8PFsZfGM?si=kAvQzaipxSvRImJv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </>
    ),
    description: "A powerful message about humanity"
  },
  {
    title: "Leave It",
    category: "Anti-smoking",
    status: "Completed",
    image: "../../assets/ShortFilm/Leave it.jpg",
    videoSrc:true,
    video: (
      <>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3Pzslw1LtEo?si=yGC7LbvBWJlCJRNu"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </>
    ),
    description: "Awareness campaign against smoking"
  },
  {
    title: "Glorious Eve",
    category: "Musical Album",
    status: "Completed",
    image: "../../assets/ShortFilm/Glorious Eve.jpg",
    videoSrc:true,
    video: (
      <>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HPAy_kL7JbY?si=e2uwMXxlq-t3mzCw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </>
    ),
    description: "Christmas musical celebration"
  },
  {
    title: "Vidhi Nyayam",
    category: "Short Film",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1532800783378-1bed63d3d1eb?auto=format&fit=crop&q=80",
    videoSrc:true,
    video: (
      <>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sample_video_6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </>
    ),
    description: "A story of survival and resilience"
  }
];


export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gold-500">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gold-400">{project.category}</p>
                <div className="absolute top-4 right-4 bg-gold-500 text-black text-sm px-3 py-1 rounded-full">
                  {project.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-dark-800 rounded-lg max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
              {selectedProject.videoSrc === true ? (
                selectedProject.video
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}

            
            <h3 className="text-2xl font-bold mb-2 text-gold-500">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-gold-400 mb-4">{selectedProject.category}</p>
            <p className="text-gray-300 mb-6">{selectedProject.description}</p>
            
            <button className="flex items-center space-x-2 text-gold-500 hover:text-gold-400">
              <span>View Project</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
