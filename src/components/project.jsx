import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      image: "/h1.jpg",
      title: "LAKE MEADOWS APARTMENTS",
      content:
        "A serene apartment complex offering modern amenities in a peaceful lakeside setting.",
      icon: "/icon1.png",
    },
    {
      image: "/h2.jpg",
      title: "WHITE VILLA RESIDENCE",
      content:
        "Minimalist white villa designed with a blend of contemporary and traditional elegance.",
      icon: "/icon2.png",
    },
    {
      image: "/h3.jpg",
      title: "MODERN FAMILY HOUSE",
      content:
        "Spacious and functional family house tailored for comfort and modern living.",
      icon: "/icon3.png",
    },
    {
      image: "/h1.jpg",
      title: "LUXURY POOL VILLA",
      content:
        "Elegant villa featuring a private pool, luxurious interiors, and scenic views.",
      icon: "/icon4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const project = projects[currentIndex];

  return (
    <section id="projects" className="relative bg-[#0A2C52] py-20 text-white overflow-hidden">
      {/* Arrows OUTSIDE Container */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3"
      >
        <ChevronLeft size={36} className="text-white transition" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3"
      >
        <ChevronRight size={36} className="text-white transition" />
      </button>

      <div className="container mx-auto px-4">
        {/* Centered Styled Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            FEATURED PROJECT
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 rounded"></div>
          <p className="text-sm text-gray-300 mt-4 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt consectetuer adipiscing elit, sed
            diam nonummy
          </p>
        </div>

        {/* Project Slider */}
        <div className="max-w-5xl mx-auto flex items-center">
          <div className="w-full px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center"
              >
                {/* Image */}
                <div className="md:w-1/2 w-full h-64 md:h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 w-full p-6 text-left flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-200">{project.content}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="mt-12 bg-yellow-500 text-black px-6 py-3 font-semibold hover:bg-yellow-700 transition rounded-sm">
            ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
