import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-semibold leading-tight tracking-tight max-w-4xl mx-auto mt-10">
        Innovative Strategies<br />for a Competitive Edge
      </h1>
      <p className="mt-6 max-w-xl mx-auto text-gray-600">
        We are here to help your business grow with well-planned strategies, innovative solutions, and precise execution. Together, let’s turn your business vision into real success.
      </p>
      <div className="mt-6">
        <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Learn More →
        </a>
      </div>

      <hr className="my-16 border-gray-200" />

      <div className="grid md:grid-cols-4 gap-8 items-start text-left">
        <div className="col-span-1">
          <h3 className="font-semibold">Explore Business to Achieve More</h3>
          <a href="#" className="mt-2 block text-sm text-gray-600 hover:underline">Explore Now →</a>
        </div>
        <div className="col-span-1">
          <h3 className="font-semibold">Ready to Make an Impact? Let’s Create Something Amazing!</h3>
          <a href="#" className="mt-2 block text-sm text-gray-600 hover:underline">Get Started →</a>
        </div>
        <div className="col-span-1">
          <Image
            src="/images/building.jpg" 
            alt="Building"
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-auto"
          />
        </div>
        <div className="col-span-1 text-sm text-gray-600">
          <p className="italic">“Their expertise helped us achieve real growth. Highly recommended!”</p>
          <p className="mt-4 font-semibold">Echo Agency</p>
          <p>Alexander Ronald</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
