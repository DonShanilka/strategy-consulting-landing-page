"use client";

import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <>
      <section className="py-14 border-b">
        <h2 className="homePage-Main-textSize font-medium leading-tight text-black max-w-8xl">
          <div>Innovative Strategies</div>
          <div className="-mt-8">for a Competitive Edge</div>
        </h2>

        <p className="text-gray-600 max-w-2xl mt-6">
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
