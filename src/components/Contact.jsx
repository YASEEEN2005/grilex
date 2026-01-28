import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background pattern or subtle overlay if needed */}
      <div className="absolute top-0 right-0 p-32 bg-brand-red opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-brand-yellow font-bold tracking-wider uppercase">Get in Touch</span>
            <h2 className="text-4xl font-serif font-bold mt-2 mb-6">We'd Love to Hear From You</h2>
            <p className="text-gray-300 leading-relaxed mb-10 max-w-md">
              Have a question about our menu? Want to book a table for a large family dinner? Give us a call or drop by!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/10 rounded-xl group-hover:bg-brand-red transition-colors">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <p className="text-gray-300 text-sm mb-1">Call for reservations & orders</p>
                  <a href="tel:07012181829" className="text-xl font-medium text-white hover:text-brand-yellow transition-colors">
                    070121 81829
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/10 rounded-xl group-hover:bg-brand-red transition-colors">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Address</h4>
                  <p className="text-gray-300">
                    Meppadi – Chooralmala Road,<br />
                    Vellarimala, Kerala 673577
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/10 rounded-xl group-hover:bg-brand-red transition-colors">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Opening Hours</h4>
                  <p className="text-gray-300">7:00 AM – 10:00 PM</p>
                  <p className="text-brand-yellow text-sm font-bold mt-1">Open All Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
             <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
             <form className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                   <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                   <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="Phone Number" />
                 </div>
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
               </div>
               <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg">
                 Send Message
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
