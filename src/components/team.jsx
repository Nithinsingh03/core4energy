import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "ABRAHAM REZA",
    role: "Contractor",
    image: "/t1.png",
  },
  {
    name: "SALMAN AHMED",
    role: "Engineer",
    image: "/t2.png",
  },
  {
    name: "DANIEL DAVID",
    role: "Mechanic",
    image: "/t3.png",
  },
  
];

export default function TeamSection() {
  return (
    <section id='team' className="py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#102E50] mb-12">
        MEET THE EXPERT TEAM
      </h2>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden bg-[#f0f3fa] rounded-lg shadow-md transition-all duration-300 max-w-[400px] mx-auto"
          >
            {/* Image with Zoom */}
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Name and Role */}
            <div className="bg-white text-center py-5">
              <p className="text-base text-gray-500">{member.role}</p>
              <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
            </div>

            {/* Social Icons Slide In */}
            <div className="absolute bottom-0 left-0 w-full bg-white px-6 py-4 flex items-center justify-between 
              translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out shadow-md">
              <div className="flex gap-5 text-blue-900">
                <HoverIcon Icon={FaFacebookF} />
                <HoverIcon Icon={FaTwitter} />
                <HoverIcon Icon={FaInstagram} />
                <HoverIcon Icon={FaLinkedinIn} />
              </div>
              <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center text-xl font-bold cursor-pointer rounded-sm">
                +
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HoverIcon({ Icon }) {
  return (
    <div className="hover:text-orange-500 cursor-pointer transition">
      <Icon size={24} />
    </div>
  );
}
