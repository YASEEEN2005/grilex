import { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, CheckCircle } from 'lucide-react';

const ReservationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    request: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close formatting for animation
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Reservation Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}%0A` + 
      `*Guests:* ${formData.guests}%0A` +
      `*Special Request:* ${formData.request || 'None'}`;

    const whatsappUrl = `https://wa.me/917012181829?text=${message}`;
    
    window.open(whatsappUrl, '_blank');

    // Show success state
    setIsSubmitted(true);
    
    // Reset form on close
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        request: ''
      });
      onClose();
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl w-full max-w-md relative overflow-hidden shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X size={24} className="text-gray-500" />
        </button>

        {isSubmitted ? (
          <div className="p-12 flex flex-col items-center text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600">
              Thank you, {formData.name}. We have reserved a table for {formData.guests} guests on {formData.date} at {formData.time}.
            </p>
            <p className="text-sm text-gray-400 mt-6">Redirecting...</p>
          </div>
        ) : (
          <div className="p-8">
            <div className="text-center mb-8">
              <span className="text-brand-red font-bold tracking-wider text-xs uppercase">Reserve Your Spot</span>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Book a Table</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none"
                  value={formData.name}
                  onChange={handleChange}
                />
                
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none text-gray-600"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select
                      name="time"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none text-gray-600 appearance-none bg-white"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="">Time</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">01:00 PM</option>
                      <option value="2:00 PM">02:00 PM</option>
                      <option value="3:00 PM">03:00 PM</option>
                      <option value="6:00 PM">06:00 PM</option>
                      <option value="7:00 PM">07:00 PM</option>
                      <option value="8:00 PM">08:00 PM</option>
                      <option value="9:00 PM">09:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <select
                    name="guests"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none text-gray-600 bg-white"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1,2,3,4,5,6,7,8,9,10, "10+"].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="request"
                  placeholder="Special Requests (Optional)"
                  rows="2"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none resize-none"
                  value={formData.request}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;
