import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, rating, imageSrc }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 border border-neutral-100 dark:border-neutral-700 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-neutral-900 dark:text-white">{name}</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{title}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${
                i < rating 
                  ? 'text-warning-500 fill-warning-500' 
                  : 'text-neutral-300 dark:text-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative flex-grow">
        <Quote className="absolute text-neutral-200 dark:text-neutral-700 h-8 w-8 -left-1 -top-1" />
        <p className="text-neutral-700 dark:text-neutral-300 relative z-10 pl-2">
          {quote}
        </p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "EchoMind has been a game-changer for my anxiety. Having access to support at any hour has made a huge difference in how I manage stress.",
      name: "Sarah J.",
      title: "Marketing Executive",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As someone who was skeptical about AI therapy, I'm impressed by how personalized the experience feels. The mood tracking feature helps me see patterns I never noticed before.",
      name: "Michael T.",
      title: "Software Engineer",
      rating: 4,
      imageSrc: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The voice response feature makes conversations feel much more natural. It's like talking to a real therapist, but available whenever I need guidance.",
      name: "Emma R.",
      title: "Healthcare Professional",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-primary-50 dark:from-neutral-900 dark:to-primary-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
            Discover how EchoMind is transforming mental health support for people from all walks of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;