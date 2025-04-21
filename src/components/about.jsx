import React, { useEffect } from 'react';
import { CheckCircle, CalendarClock, HardHat } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: <CheckCircle className="text-[#0A1123] w-10 h-10" />,
    title: 'Best Quality',
    description:
      'Autora Construction Services are committed to meeting the highest quality standards without compromising our safety culture..',
  },
  {
    icon: <CalendarClock className="text-[#0A1123] w-10 h-10" />,
    title: 'On Time',
    description:
      'Autora Construction Services are committed to meeting the highest quality standards without compromising our safety culture..',
  },
  {
    icon: <HardHat className="text-[#0A1123] w-10 h-10" />,
    title: 'Experienced',
    description:
      'Autora Construction Services are committed to meeting the highest quality standards without compromising our safety culture..',
  },
];

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id='about' className="py-16 px-6 text-center max-w-7xl mx-auto">
      <h2 
        className="text-3xl md:text-4xl text-[#102E50] font-bold mb-2" 
        data-aos="fade-up"
      >
        YOUR BEST CHOOSE
      </h2>
      <div className="flex justify-center items-center mb-6" data-aos="fade-up" data-aos-delay="100">
        <hr className="w-10 border-gray-300" />
        <span className="mx-3 text-[#102E50]">
          <CalendarClock />
        </span>
        <hr className="w-10 border-gray-300" />
      </div>
      <p 
        className="text-[#102E50] max-w-3xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        More than 500 projects completed in Autora - With over 25 years of combined experience,
        we have the knowledge to serve you.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-4"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="bg-gray-100 rounded-full hover:bg-[#FFB400] p-6 mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold text-[#000000] uppercase mb-1">{item.title}</h3>
            <hr className="w-12 border-t-2 border-gray-300 mb-3" />
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* About Us Button */}
      <button
        className="bg-yellow-500 text-black font-bold py-3 rounded px-8 text-sm uppercase hover:bg-yellow-600 transition"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        About Us
      </button>
    </section>
  );
};

export default AboutSection;
