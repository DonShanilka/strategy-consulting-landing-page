"use client";

import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <>
      <section className="min-h-screen text-white items-center justify-between px-6 md:px-20 pt-20 relative">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-medium leading-tight text-black relative text-left">
          <div>Innovative Strategies</div>
          <div className="mt-0 sm:-mt-0 md:-mt-2 lg:-mt-2 xl:-mt-6">for a Competitive Edge</div>
        </h2>
        <p className="text-gray-500 max-w-3xl mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-4xl xl:text-2xl 2xl:text-xl">
          We are here to help your business grow with well-planned strategies,
          innovative solutions, and precise execution. Together, let’s turn your
          business vision into real success.
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Learn More →
          </button>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4 py-10">
        <div className="col-span-1 bg-gray-100 p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Explore Business to Achieve More
            </h3>
          </div>
          <a href="#" className="text-sm text-black mt-4 flex items-center">
            Explore Now →
          </a>
        </div>

        <div className="col-span-1 bg-gray-100 p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Ready to Make an Impact? Let’s Create Something Amazing!
            </h3>
          </div>
          <a href="#" className="text-sm text-black mt-4 flex items-center">
            Get Started →
          </a>
        </div>

        <div className="col-span-1">
          <Image
            src="/building.jpg"
            alt="Building"
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-1 bg-white p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm italic text-gray-800">
              “Their expertise helped us achieve real growth. Highly
              recommended!”
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>Echo Agency</p>
            <p className="font-semibold">Alexander Ronald</p>
          </div>
        </div>
      </section> 
    </>
  );
};
