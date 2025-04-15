import {
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0A1123] text-white pt-16">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between gap-x-14 gap-y-10 pb-14 border-b border-white/10">
        {/* About */}
        <div className="text-left">
          <h3 className="text-lg font-bold mb-4">About Core4Energies</h3>
          <p className="text-sm mb-6 leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur, nunc et facilisis convallis, nisi erat lacinia ligula.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Our Services */}
        <div className="text-left ml-14">
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm font-semibold text-gray-300">
            <li>Web Design</li>
            <li>Construction</li>
            <li>Economics</li>
            <li>Photography</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="text-left ml-4 ">
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm font-semibold text-gray-300">
            <li>About Us</li>
            <li>Courses</li>
            <li>Enrollment</li>
            <li>Be an Instructor</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Address */}
        <div className="text-left ">
          <h3 className="text-lg font-bold mb-4">Address</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPinIcon className="w-12 h-12 text-orange-500" />
              #392,1st Floor, 3rd Block, Rajaji Nagar Bangalore, KARNATAKA -560010
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-6 h-6 text-orange-500" />
              core4energies@gmail.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-[#04102A] hover:bg-orange-500 text-white hover:text-[#04102A] p-2 rounded-full transition"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-y-4 text-sm text-gray-400">
        {/* Logo + Copy */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <p className="text-gray-400 ml-80 text-sm">
            Core4Energies &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
