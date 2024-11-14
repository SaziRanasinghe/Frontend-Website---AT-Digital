import React from 'react';

function Hero() {
  return (
    <section
      className="bg-cover bg-center text-white py-32 sm:py-48 md:py-80"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/7d26/92c3/02df419cba923b35861b32302ece4d90?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qw~v7mDAYyGLOFUcoevwbU5UcE0waW1KTvs-zX4-ysSpJ9pBUirFcBpTjL5YjPLpyhM6Ls4jIpJT8XNAwRwUPSnwgNiewLO~~xGebGGD-moO12ta-sfnJBo1YZsM~dBnQ0jqeHmOrjQHs~8PbNn1O6Q4igKl4hvvL-seCkgR3cIQZx6grAfF0TmUV-VFUmzfTctegCwFQcMTRl6SkByTgSCe06XELQ~R5nfKn7QWiOEtouMNxoP59xZvOCDg2AWAFErOwnKcxGtrFgWsF20AQEZrCxMR1zC0c1hmaJ84mqXgPejMXk6DJYCCcWCUgHnAkqKNEz6oNCnOSy-VSY-i4w__')",
      }}
    >
      <div className="absolute bg-gradient-to-r from-customGreen to-customBlue bottom-14 sm:bottom-20 md:bottom-14 left-4 sm:left-8 p-4 sm:p-6 max-w-lg text-left z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <button className="bg-orange-500 px-6 py-2 rounded mt-4 hover:bg-orange-600 text-sm sm:text-base md:text-lg">
          Get Free Consultation
        </button>
      </div>
    </section>
  );
}

export default Hero;
