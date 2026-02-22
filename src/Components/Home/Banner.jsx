import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="relative h-130 bg-no-repeat bg-center bg-cover z-40 before:absolute before:inset-0 before:bg-black/70"
        style={{
          backgroundImage: "url('/BannerImg.png')",
        }}>
        <div className="flex flex-col justify-center h-full items-center px-6 sm:px-10 py-10 ">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h1 className="text-white md:text-5xl text-4xl font-bold mb-6 leading-tight!">
                Professional Care for Every Generation{" "}
                <span className="text-secondary">of Your Family</span>
              </h1>
              <p className="text-base text-slate-200 leading-relaxed">
                Providing safe, compassionate, and reliable care for your
                children and elderly loved ones, ensuring comfort, dignity, and
                peace of mind whenever you need trusted support at home.
              </p>

              <div className="max-w-xl mx-auto mt-12">
                <div className="bg-white flex px-6 py-4 border border-gray-300 rounded-full overflow-hidden">
                  <input
                    type="email"
                    placeholder="Search Something..."
                    className="w-full text-slate-900 outline-none text-base bg-transparent pr-4"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    className="w-5 cursor-pointer fill-gray-500">
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-center flex-wrap gap-4">
                <button className="px-6 py-3 text-base rounded-full font-medium tracking-wide text-white border-0 bg-secondary hover:bg-purple-700 transition-all cursor-pointer">
                  Get Started Today
                </button>
                <button className="px-6 py-3 text-base rounded-full font-medium tracking-wide text-slate-900 border-0 bg-white hover:bg-purple-100 transition-all cursor-pointer">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
