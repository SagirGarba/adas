import Button from "../reusable/Button";

const Hero = () => {
  return (
    <div className="wrapper relative h-[50vh] md:h-[554px] flex items-center justify-center text-center text-white px-4">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/Hero.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay for darkening video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <h1 className="text-3xl  font-bold mb-8 md:text-[56px] md:leading-[70px] text-[#0B6623]">
          Grow Your <span className="text-white">Agribusiness</span> with{" "}
          <span className="text-white">ADAS-P</span>
        </h1>

        {/* Paragraph */}
        <p className="text-xl md:text-xl lg:text-2xl mb-8">
          Enhancing Income and Community Resilience through Agribusiness
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
