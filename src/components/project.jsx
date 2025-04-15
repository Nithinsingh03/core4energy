export default function FeaturedProjects() {
  const projects = [
    {
      image: "/h1.jpg",
      title: "LAKE MEADOWS APARTMENTS",
      content: "A serene apartment complex offering modern amenities in a peaceful lakeside setting.",
      icon: "/public/icon1.png",
    },
    {
      image: "/h2.jpg",
      title: "WHITE VILLA RESIDENCE",
      content: "Minimalist white villa designed with a blend of contemporary and traditional elegance.",
      icon: "/public/icon2.png",
    },
    {
      image: "/h3.jpg",
      title: "MODERN FAMILY HOUSE",
      content: "Spacious and functional family house tailored for comfort and modern living.",
      icon: "/public/icon3.png",
    },
    {
      image: "/h1.jpg",
      title: "LUXURY POOL VILLA",
      content: "Elegant villa featuring a private pool, luxurious interiors, and scenic views.",
      icon: "/public/icon4.png",
    },
  ];

  return (
    <section id="projects" className="bg-[#0A2C52] py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">FEATURED PROJECT</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-lg overflow-hidden shadow-lg relative group transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.content}</p>
              </div>

              {/* Icon Below Content */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-md hover:bg-white transition">
                  <img
                    src={project.icon} // Use the dynamic icon for each project
                    alt="Link"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-yellow-500 text-white px-6 py-3 font-semibold hover:bg-yellow-700 transition rounded-sm">
          ALL PROJECTS
        </button>
      </div>
    </section>
  );
}
