import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A1D2A] to-[#081625] text-white px-16 py-14 rounded-t-3xl">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        {/* Left Content */}
        <div className="max-w-xl flex flex-col gap-6">
          <p className="text-lg text-[#D6E2EB]">
            Join a vibrant tennis community where your journey toward better
            skills and new friendships begins today.
          </p>

          <button className="w-fit bg-[#3BB2FF] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2aa5f5] transition">
            Buy Membership
          </button>
        </div>

        {/* Right Socials */}
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#B7C6D1]">Follow us</p>

          <div className="flex gap-3">
            {["Instagram", "Facebook", "Tik Tok", "Youtube"].map(
              (item, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-black/40 rounded-full text-sm text-[#E6EFF5] cursor-pointer hover:bg-black/60 transition"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-white/10" />

      {/* Bottom Section */}
      <div className="flex justify-between items-start">
        {/* Brand */}
        <h1 className="text-6xl font-semibold tracking-tight">
          Horizon Courts
        </h1>

        {/* Links */}
        <div className="flex gap-20 text-sm">
          <div className="flex flex-col gap-3">
            <p className="text-[#9FB0BD]">About</p>
            <p>Services</p>
            <p>Coaches</p>
            <p>Events</p>
            <p>Membership</p>
          </div>

          <div className="flex flex-col gap-3 text-[#E6EFF5]">
            <p className="text-[#9FB0BD]">Contact</p>
            <p>
              123 Pacific Drive <br />
              Santa Monica, CA 90401
            </p>
            <p>Open daily: 7:00 AM – 10:00 PM</p>
            <p>(310) 555-7890</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 flex justify-between items-center text-xs text-[#9FB0BD]">
        <p>© 2025 Copyright</p>
        <p className="cursor-pointer hover:text-white transition">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
