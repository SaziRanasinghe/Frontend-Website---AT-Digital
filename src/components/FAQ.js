import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-gray-100 p-6 mb-4 rounded-lg shadow-md ${isOpen ? 'text-purple-700' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left font-semibold"
      >
        {question} <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="text-purple-950 mt-2">{answer}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Frequently Asked Questions</h2>
        <FAQItem 
          question="lorem ipsum dolor sit amet consectetur adipiscing elit?"
          answer="It usually begins with: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' The purpose of lorem ipsum is to create a natural looking block of text."
        />
        <FAQItem 
          question="lorem ipsum dolor sit amet consectetur adipiscing elit?"
          answer="It usually begins with: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' The purpose of lorem ipsum is to create a natural looking block of text."
        />
        <FAQItem 
          question="lorem ipsum dolor sit amet consectetur adipiscing elit?"
          answer="It usually begins with: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' The purpose of lorem ipsum is to create a natural looking block of text."
        />
      </div>
    </section>
  );
}

export default FAQ;
