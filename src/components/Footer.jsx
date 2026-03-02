import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0A1D2A] to-[#081625] text-white p-8 lg:p-16 rounded-t-[3rem] mt-16 shadow-2xl">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Content */}
        <div className="max-w-xl flex flex-col gap-8">
          <p className="text-xl lg:text-2xl text-[#D6E2EB] font-medium leading-relaxed">
            Join a vibrant tennis community where your journey toward better
            skills and new friendships begins today.
          </p>

          <button className="w-fit bg-[#3BB2FF] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#2aa5f5] transition-all hover:shadow-lg active:scale-95 cursor-pointer">
            Buy Membership
          </button>
        </div>

        {/* Right Socials */}
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold text-[#B7C6D1] uppercase tracking-widest">
            Follow us
          </p>

          <div className="flex flex-wrap gap-3">
            {["Instagram", "Facebook", "TikTok", "YouTube"].map(
              (item, index) => (
                <span
                  key={index}
                  className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#E6EFF5] cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all font-medium"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t border-white/10" />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        {/* Brand */}
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white">
          Horizon Courts
        </h1>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 text-sm">
          <div className="flex flex-col gap-4">
            <p className="text-[#9FB0BD] font-semibold uppercase tracking-wider mb-2">
              About
            </p>
            <p className="cursor-pointer hover:text-[#3BB2FF] transition-colors">
              Services
            </p>
            <p className="cursor-pointer hover:text-[#3BB2FF] transition-colors">
              Coaches
            </p>
            <p className="cursor-pointer hover:text-[#3BB2FF] transition-colors">
              Events
            </p>
            <p className="cursor-pointer hover:text-[#3BB2FF] transition-colors">
              Membership
            </p>
          </div>

          <div className="flex flex-col gap-4 text-[#E6EFF5]">
            <p className="text-[#9FB0BD] font-semibold uppercase tracking-wider mb-2">
              Contact
            </p>
            <p className="leading-relaxed">
              123 Pacific Drive, Santa Monica, CA 90401
            </p>
            <p>Open daily: 7:00 AM – 10:00 PM</p>
            <p className="font-semibold text-lg text-[#3BB2FF]">
              (310) 555-7890
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#9FB0BD] font-medium">
        <p>© 2026 Horizon Courts. All rights reserved.</p>
        <div className="flex gap-8">
          <p className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:text-white transition">
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
