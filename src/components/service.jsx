import {
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Construction Service',
    description:
      'Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud',
    icon: WrenchScrewdriverIcon,
    bgImage: '/h1.jpg',
  },
  {
    title: 'Infrastructure Service',
    description:
      'Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud',
    icon: BuildingOfficeIcon,
    bgImage: '/h2.jpg',
  },
  {
    title: 'Architecture Service',
    description:
      'Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud',
    icon: PencilSquareIcon,
    bgImage: '/h3.jpg',
  },
  {
    title: 'Construction Service',
    description:
      'Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud',
    icon: WrenchScrewdriverIcon,
    bgImage: '/h1.jpg',
  },
  {
    title: 'Infrastructure Service',
    description:
      'Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud',
    icon: BuildingOfficeIcon,
    bgImage: '/h2.jpg',
  },
  {
    title: 'Architecture Service',
    description:
      'Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt uty labore et dolore magna aliqua. Ut enimd minim veniam, quis nostrud',
    icon: PencilSquareIcon,
    bgImage: '/h3.jpg',
  },
];

const Services = () => {
  return (
    <section id='services' className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#102E50] mb-2">
        Services We are Offering
      </h2>
      <div className="w-20 h-1 bg-yellow-500  mx-auto mb-4 rounded-full" />
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
        consectetuer adipiscing elit, sed diam nonummy
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md shadow hover:shadow-xl transition-all duration-500"
            >
              {/* Hover background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col items-center text-center transition-all duration-500 group-hover:text-white">
                <Icon className="w-15 h-15 mb-6 text-[#FFB400] group-hover:text-white transition-colors duration-300" />
                <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                <p className="text-sm mb-6">{service.description}</p>
                <hr className="border-gray-200 group-hover:border-white w-full mb-4 transition-all duration-500" />
                <div className="flex justify-center items-center gap-2 font-semibold">
                  <span>Read More</span>
                  <span className="bg-[#FFB400] text-white rounded-sm px-2 py-1 text-md font-bold">+</span>
                </div>
              </div>

              {/* Overlay to darken background image */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-0"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
