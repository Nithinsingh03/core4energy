import { FaStar, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Johnathon Doe',
    location: 'MIAMI', // Replace with actual path
  },
  {
    name: 'Marina Samuel',
    location: 'NEW YORK',
   
  },
  {
    name: 'Oakland Gardner',
    location: 'UTAH',
    
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white hover:bg-[#0A2C52] text-[#0A2C52] hover:text-white transition duration-300 p-6 rounded-md relative shadow-sm group">
      <div className="mb-4">
        <span className="font-bold">Rating: </span>
        <span className="text-orange-500 inline-flex gap-1 text-sm">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-gray-400" />
        </span>
      </div>
      <p className="text-sm leading-relaxed mb-8 group-hover:text-gray-200">
        “Builderrine Construction provides us amazing services. They have
        designed and built our Miami grand Hotel project. They have exceeded
        our expectations and did such an amazing job. We are very happy with
        their work”
      </p>
      <FaQuoteRight className="absolute top-6 right-6 text-2xl text-gray-300 group-hover:text-white" />

      {/* User Info */}
      <div className="flex items-center gap-5 absolute bottom-6">
       
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-xs text-gray-500 group-hover:text-gray-300">{testimonial.location}</p>
        </div>
      </div>
      
   
  );
};

const Testimonials = () => {
  return (
    <section id='testimonials' className="bg-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] mb-2"> Testimonials </h2>
        <p className="text-black">
          Builderrine is the best construction company. It has the best team
          who are providing best service possible.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} testimonial={testimonial} />
        ))}
      </div>

      {/* Navigation dots (optional) */}
      <div className="flex justify-center gap-2 mt-10">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === 0 ? 'bg-orange-500' : 'bg-[#0A2C52]'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
