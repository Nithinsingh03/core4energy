import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-[#0A2C52] text-white py-16 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Images */}
        <div className="relative w-full lg:w-1/2">
          {/* Image 1 */}
          <img
            src="/Ab1.png"
            alt="Building"
            className="w-full rounded-md"
          />

          {/* Overlapping second image */}
          {/* <img
            src="/Ab2.png.jpg"
            alt="Modern Building"
            className="absolute top-10 right-[-30px] w-2/3 shadow-lg rounded-md hidden md:block"
          /> */}

          {/* Experience Badge */}
          <div className="absolute bottom-[-20px] left-0 bg-[#FFB400] text-[#0A2C52] p-6 font-semibold text-center shadow-lg">
            <h2 className="text-4xl font-bold leading-none">35</h2>
            <p className="text-sm mt-1">Years of Experience</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <h4 className="text-sm text-[#FFB400] font-semibold uppercase tracking-wide">
              About Builderrine Construction
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building A New Era In <br /> World Of Construction
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Builderrine is the safe, reliable and cost effective construction
            company. We offer best construction services. We have more than 35
            years of experience in the field of building & construction. If you
            want to build any highrise or housing projects, you are in the best
            place right now.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-[#FFB400] p-3 rounded">
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Most Reliable</h4>
                <p className="text-sm text-gray-300">
                  More than 200 companies trusted us
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#FFB400] p-3 rounded">
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Cost Effective</h4>
                <p className="text-sm text-gray-300">
                  Builderrine is famous for its cost effectiveness
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#FFB400] text-[#0A2C52] font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
