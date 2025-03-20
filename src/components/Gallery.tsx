import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1614728263952-84ea256f9679",
    title: "Mars Surface"
  },
  {
    url: "https://images.unsplash.com/photo-1614726365952-510103b1bde4",
    title: "Martian Landscape"
  },
  {
    url: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
    title: "Red Planet Terrain"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Mars Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.url}
              onClick={() => setSelectedImage(image.url)}
              className="cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={`${selectedImage}?auto=format&fit=crop&w=1600&q=80`}
            alt="Mars"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}