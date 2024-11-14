import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-12 grid gap-12 md:grid-cols-3">
        <div className="text-left">
          <h3 className="text-lg font-bold">AT DIGITAL</h3>
          <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
        </div>
        <div className="text-left md:ml-32">
          <h4 className="font-bold">Our Technologies</h4>
          <ul>
            <li>React JS</li>
            <li>Gatsby</li>
            <li>Node JS</li>
            <li>Next JS</li>
          </ul>
        </div>
        <div className="text-left md:ml-32">
          <h4 className="font-bold">Our Services</h4>
          <ul>
            <li>Social Media Marketing</li>
            <li>Web and Mobile App <br/> Development</li>
            <li>Data and Analytics</li>
          </ul>
        </div>
      </div>
      <hr className="my-4 border-gray-200 w-1/2 mx-auto" />
      <div className="text-center text-sm">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
        <a href="/terms-conditions" className="hover:underline"> Terms & Conditions</a>
      </div>
    </footer>
  );
}

export default Footer;
