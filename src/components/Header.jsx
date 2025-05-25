import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-600 border-b-4  py-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-6">
        {/* Logo in round container */}
        <div className="bg-green-100 p-2 rounded-full shadow-md">
          <img
            src="/images/Green and White Simple Professional Modern Herbal Logo.png"
            alt="Herbal Magic Logo"
            className="h-50 w-50 rounded-full object-cover"
          />
        </div>

        {/* Title and Subtitle 
        <div className="mt-4 md:mt-0 md:ml-6">
          <h1 className="text-4xl font-bold tracking-wider text-white">Herbal Roots <br /> wellness center</h1>
          <p className="mt-1 text-lg text-white">
            Healing from nature, the way it should be.
          </p>
        </div>*/}
      </div>
    </header>
  );
};

export default Header;
