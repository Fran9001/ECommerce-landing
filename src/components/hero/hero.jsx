import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-[50vh] flex justify-start items-center bg-gradient-to-r from-green-200 to-green-400">
      <div className="hero-content text-start text-neutral-content md:ml-32">
        <div className="max-w-[40rem] ">
          <h1 className="mb-5 text-5xl text-pretty font-bold text-stone-700">
            Lo mejor de la tecnología en un solo lugar
          </h1>
          <p className="mb-5 text-stone-600 text-justify">
            Innovación y calidad en cada compra. En nuestra tienda online,
            encontrarás una amplia gama de productos tecnológicos diseñados para
            mejorar tu vida. Disfruta de un proceso de compra fácil, envíos
            rápidos y un soporte al cliente que siempre está a tu disposición.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
