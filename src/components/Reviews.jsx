import { Star, StarHalf } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Reviews = () => {
  const reviews = [
    {
      name: 'Adarsh K',
      rating: 5,
      date: '2 months ago',
      text: 'One of the best spots in Vellarimala. The Chicken Biryani was flavorful and the beef roast was just perfect. Highly recommended for families!'
    },
    {
      name: 'Sonia P',
      rating: 4,
      date: '1 week ago',
      text: 'Great ambiance and tasty food. The service was quick and the staff were very polite. Good price for the quantity.'
    },
    {
      name: 'Rahul M',
      rating: 5,
      date: '3 weeks ago',
      text: 'Stopped here on our way to Wayanad. The fish curry meals were authentic. A hidden gem with great parking space too.'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-brand-red font-bold tracking-wider uppercase">Customer Love</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">
              What Our Guests Say
            </h2>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center gap-4 bg-yellow-50 p-4 rounded-xl">
            <div className="text-4xl font-bold text-brand-red">3.8</div>
            <div>
              <div className="flex text-brand-yellow">
                <Star size={20} fill="#FFC107" />
                <Star size={20} fill="#FFC107" />
                <Star size={20} fill="#FFC107" />
                <Star size={20} fill="#FFC107" />
                <StarHalf size={20} fill="#FFC107" /> {/* Approximate for 3.8 generally shown as 3.5-4 */}
              </div>
              <p className="text-sm text-gray-600">Based on 613+ Google Reviews</p>
            </div>
          </div>
        </div>



// ... existing code

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all relative border border-gray-100 hover:-translate-y-2">
                 {/* Quote icon background decoration could go here */}
                 <div className="flex text-brand-yellow mb-4">
                   {[...Array(review.rating)].map((_, i) => (
                     <Star key={i} size={16} fill="#FFC107" />
                   ))}
                 </div>
                 <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                 <div className="flex items-center justify-between mt-auto">
                   <div>
                     <h4 className="font-bold text-gray-900">{review.name}</h4>
                     <span className="text-xs text-gray-500">{review.date}</span>
                   </div>
                   <div className="h-8 w-8 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-xs">
                     {review.name.charAt(0)}
                   </div>
                 </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
