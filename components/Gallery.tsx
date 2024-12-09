import React, { useState } from 'react';

const cards = [
  { id: 1, title: 'Card 1', description: 'This is the first card' },
  { id: 2, title: 'Card 2', description: 'This is the second card' },
  { id: 3, title: 'Card 3', description: 'This is the third card' },
  { id: 4, title: 'Card 4', description: 'This is the fourth card' },
  { id: 5, title: 'Card 5', description: 'This is the fifth card' },
];

const CustomCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCards = 3; // Number of visible cards at a time

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[90%] mx-auto">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(activeIndex * 100) / visibleCards}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[calc(100%/3)] p-4" // Ensure each card takes 1/3 of the width
            >
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
      >
        Next
      </button>
    </div>
  );
};

export default CustomCarousel;
