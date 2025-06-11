import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';
import '@fontsource/poppins';

const categories = ['Starters', 'Main Course', 'Juices', 'Desserts', 'Mocktails', 'Biryani'];

const menuItems: Record<string, { name: string; price: string; image: string; action: () => void }[]> = {
  Starters: [
    { name: 'Veg Manchurian', price: '120', image: '/images/veg-manchurian.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Paneer Tikka', price: '150', image: '/images/paneer-tikka.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Spring Rolls', price: '100', image: '/images/spring-rolls.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Chicken Wings', price: '160', image: '/images/chicken-wings.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Samosa Platter', price: '80', image: '/images/samosa.jpg', action: () => window.open('https://samosaar.netlify.app/') }
  ],
  'Main Course': [
    { name: 'Butter Chicken', price: '220', image: '/images/butter-chicken.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Momos', price: '130', image: '/images/momos.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'White Sauce Pasta', price: '180', image: '/images/pasta.jpg', action: () => window.open('https://pastaar.netlify.app/') },
    { name: 'Paneer Butter Masala', price: '200', image: '/images/paneer-butter.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Roti Basket', price: '70', image: '/images/roti.jpg', action: () => window.open('https://www.jnanar.com') }
  ],
  Juices: [
    { name: 'Mango Juice', price: '50', image: '/images/mango-juice.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Orange Juice', price: '50', image: '/images/orange-juice.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Pineapple Juice', price: '60', image: '/images/pineapple-juice.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Watermelon Juice', price: '45', image: '/images/watermelon-juice.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Grape Juice', price: '55', image: '/images/grape-juice.jpg', action: () => window.open('https://www.jnanar.com') }
  ],
  Desserts: [
    { name: 'Ice Cream', price: '80', image: '/images/ice-cream.jpg', action: () => window.open('https://icecreamar.netlify.app/') },
    { name: 'Gulab Jamun', price: '70', image: '/images/gulab-jamun.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Rasgulla', price: '75', image: '/images/rasgulla.jpg', action: () => window.open('https://www.jnanar.com') }
  ],
  Mocktails: [
    { name: 'Virgin Mojito', price: '90', image: '/images/mojito.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Blue Lagoon', price: '95', image: '/images/blue-lagoon.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Mint Cooler', price: '85', image: '/images/mint-cooler.jpg', action: () => window.open('https://www.jnanar.com') }
  ],
  Biryani: [
    { name: 'Hyderabadi Biryani', price: '210', image: '/images/hyderabadi-biryani.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Chicken Fried Rice', price: '170', image: '/images/chicken-fried-rice.jpg', action: () => window.open('https://www.jnanar.com') },
    { name: 'Veg Fried Rice', price: '140', image: '/images/veg-fried-rice.jpg', action: () => window.open('https://www.jnanar.com') }
  ]
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('Starters');
  const currentItems = menuItems[activeCategory] || [];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-[Poppins] px-4 overflow-x-hidden overflow-y-auto scrollbar-hide">
      <motion.div
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/bg-texture.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      />

      <header className="py-6 flex flex-col items-start gap-4 relative z-10">
        <motion.h1
          className="text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AR Royal Dine
        </motion.h1>
        <nav className="flex gap-3 overflow-x-auto scrollbar-hide w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap z-10 ${cat === activeCategory ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md' : 'bg-gray-200 hover:bg-yellow-400 hover:text-white'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <main className="grid gap-6 py-6 relative z-10">
        {currentItems.length > 0 ? currentItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-yellow-300 cursor-pointer hover:shadow-yellow-400 transform hover:scale-[1.01] transition-all"
            onClick={item.action}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold text-yellow-600">{item.name}</h2>
              <p className="text-sm text-gray-600">Rs. {item.price}</p>
              <button className="mt-3 bg-yellow-400 text-white font-medium px-4 py-2 rounded-full w-max hover:bg-yellow-500">
                View in AR
              </button>
            </div>
          </motion.div>
        )) : (
          <p className="text-center text-gray-500">No items available in this category.</p>
        )}
      </main>
    </div>
  );
}
