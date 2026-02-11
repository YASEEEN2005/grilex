import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Main Course');

  const categories = ['Starters', 'Main Course', 'Beverages'];

  const menuItems = {
    'Starters': [
      { name: 'Chicken 65', price: '₹180', description: 'Fried chicken stripes with spicy marinade.', tag: 'Bestseller' },
      { name: 'Gobi Manchurian', price: '₹140', description: 'Crispy cauliflower florets tossed in tangy sauce.', tag: 'Veg' },
      { name: 'Fish Fry', price: '₹220', description: 'Fresh catch marinated in Kerala spices and fried.', tag: '' },
      { name: 'Beef Dry Fry', price: '₹240', description: 'Spicy beef chunks slow-roasted with coconut slices.', tag: 'Spicy' },
    ],
    'Main Course': [
      { name: 'Kerala Meals', price: '₹120', description: 'Traditional feast with rice, sambar, fish curry, and sides.', tag: 'Lunch Only' },
      { name: 'Chicken Biryani', price: '₹210', description: 'Aromatic basmati rice cooked with spiced chicken.', tag: 'Must Try' },
      { name: 'Appam & Stew', price: '₹160', description: 'Soft rice pancakes served with creamy vegetable stew.', tag: 'Classic' },
      { name: 'Parotta & Beef Curry', price: '₹190', description: 'Layered flatbread with spicy beef gravy.', tag: 'Popular' },
      { name: 'Fish Curry Meals', price: '₹180', description: 'Meals served with signature spicy fish curry.', tag: '' },
      { name: 'Ghee Roast Dosa', price: '₹90', description: 'Crispy crepe made from fermented rice and lentil batter.', tag: 'Veg' },
    ],
    'Beverages': [
      { name: 'Kulukki Sarbath', price: '₹40', description: 'Spiced lemon shaker drink with basil seeds.', tag: 'Refreshing' },
      { name: 'Masala Tea', price: '₹20', description: 'Strong tea brewed with aromatic spices.', tag: '' },
      { name: 'Fresh Lime Soda', price: '₹50', description: 'Sparkling lime drink, sweet or salted.', tag: '' },
      { name: 'Mango Lassi', price: '₹80', description: 'Creamy yogurt drink blended with sweet mango.', tag: '' },
    ]
  };

  return (
    <section id="menu" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-red font-bold tracking-wider uppercase">Delicious Offerings</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">
            Our <span className="text-brand-yellow">Menu</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our wide range of authentic Kerala dishes. Average price range ₹200–400 per person.
          </p>
        </div>

        {/* Category Filter */}


        <RevealOnScroll>
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === category
                    ? 'bg-brand-red text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <RevealOnScroll key={`${activeCategory}-${index}`} delay={index * 50}>
              <div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-50 flex justify-between items-start group hover:-translate-y-1"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-brand-red transition-colors">{item.name}</h3>
                    {item.tag && (
                      <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wide bg-yellow-50 text-brand-yellow rounded">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="ml-4">
                  <span className="text-lg font-bold text-brand-red">{item.price}</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center mt-12">
          <a download href="#" className="inline-flex items-center justify-center px-8 py-3 border-2 border-brand-red text-brand-red rounded-full font-bold hover:bg-brand-red hover:text-white transition-all hover:scale-105 hover:shadow-lg">
            Download Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
