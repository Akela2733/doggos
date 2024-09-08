// pages/index.js
import React from "react"; // Ensure React is imported
import Image from "next/image";

const Home = () => {
  const dogs = [
    { name: "Sydney", transform: "scale-110 -rotate-6" },
    { name: "Dorra", transform: "scale-25" },
    { name: "Olly", transform: "scale-120 rotate-12" },
    { name: "Coby", transform: "scale-115" },
    {
      name: "Danny",
      transform: "scale-75 rotate-6 skew-y-6 translate-x-2 translate-y-3",
    },
    { name: "Rexy", transform: "scale-55 rotate-6" },
  ];

  return (
    <div className="relative  overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0  w-full h-full object-cover -z-10"
        src="/videos/pawmp4.mp4"
        autoPlay
        muted
        loop
      />

      {/* Content */}
      <main className="relative z-10 py-20 px-10 p-16 max-w-6xl mx-auto min-h-screen">
        <h1 className=" text-red-650">
          Hi Doggos <span className="inline-block animate-bounce">🐶</span>
        </h1>
        <h2 className="my-5 truncate">Best Doggos</h2>

        <div className="grid grid-cols-2 gap-2 gap-y-6 md:grid-cols-3 md:gap-12 my-5 lg:my-10">
          {dogs.map(({ name, transform }, idx) => (
            <div
              key={name}
              className={`border-2 border-opacity-50 border-red-400 rounded-xl px-5 py-2 m-auto shadow-xl shadow-red-200 bg-white/30 hover:bg-red-200 hover:scale-105 hover:transition hover:duration-500 ${transform}`}
            >
              <div>
                <h2 className="my-3">{name}</h2>
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  src={`/images/${idx + 1}.png`}
                  width={160}
                  height={160}
                  alt={name}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
