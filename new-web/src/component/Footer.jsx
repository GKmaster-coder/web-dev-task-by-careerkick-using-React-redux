import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="min-h-16">
          <div className="flex justify-between items-center flex-col md:flex-row py-10">
            <h2 className="text-white text-4xl font-bold">Subscribe To Our Newsletter</h2>
            <form className="md:w-1/3 w-full mt-8 md:mt-0 relative text-white">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-4 rounded shadow-md w-full text-white border-white"
              />
              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1 text-black">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
       <>
       <>
  <footer className="bg-[#0b1120] text-white">
    <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Brand Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Eclipse</h2>
        <p className="text-sm mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ex
          laboriosam dignissimos iusto ut nam! Nemo quae maxime eaque error!
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-pink-500">
            {/* Facebook */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2..." />
            </svg>
          </a>
          <a href="#" className="hover:text-pink-500">
            {/* Twitter */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
            </svg>
          </a>
          <a href="#" className="hover:text-pink-500">
            {/* YouTube */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-..." />
            </svg>
          </a>
          <a href="#" className="hover:text-pink-500">
            {/* Instagram */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.315 2c2.43 0 2.784..." />
            </svg>
          </a>
        </div>
      </div>

      {/* Pages Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Pages</h2>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-pink-500">Home</a></li>
          <li><a href="#" className="hover:text-pink-500">About</a></li>
          <li><a href="#" className="hover:text-pink-500">FAQs</a></li>
          <li><a href="#" className="hover:text-pink-500">Contact</a></li>
        </ul>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Category</h2>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-pink-500">Monitors</a></li>
          <li><a href="#" className="hover:text-pink-500">GPUs</a></li>
          <li><a href="#" className="hover:text-pink-500">Laptops</a></li>
          <li><a href="#" className="hover:text-pink-500">Keyboard</a></li>
        </ul>
      </div>

      {/* Contact Info Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Category</h2>
        <ul className="space-y-3 text-sm">
          <li>70 Washington Square South, New Your, NY 10012, United States</li>
          <li>+12345 678 910</li>
          <li>+12345 678 109</li>
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="bg-[#090e1a] py-4 text-center text-sm">
      Copyright © 2025 OnlineITtuts
    </div>
  </footer>
</>

       </>
    </footer>
  );
}

export default Footer;
