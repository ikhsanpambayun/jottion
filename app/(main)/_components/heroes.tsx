import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[600px] md:h-[500px]">
          <Image
            src="/assets/images/hero-dark.png"
            fill
            className="hidden dark:block object-contain"
            alt="hero img"
          />
          <Image
            src="/assets/images/hero-light.png"
            fill
            className="dark:hidden object-contain"
            alt="hero img"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
