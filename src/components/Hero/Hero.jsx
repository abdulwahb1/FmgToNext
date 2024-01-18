import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex flex-row mt-[-50px] ">
      <div className="flex flex-col flex-grow justify-center items-center mt-10">
        <p className="text-[65px] font-bold leading-[77px] tracking-wide text-left ml-[170px] mb-[10px]">
          Creative support
          <br />
          made simple.
        </p>
        <p className="text-pink leading-[44px] font-light text-[32px] ml-[73px]">
          We help smallish woman-owned <br />
          businesses flourish.
        </p>
        <p className="mr-[-221px] text-[20px] font-light leading-[20px] mt-[30px]">
          How? By offering reassurance that the creative is done, and done well,{" "}
          <br />
          so you can focus on your core business functions.
        </p>
      </div>
      <div className="flex flex-col flex-grow">
        <Image
          src="assets/images/hero.svg"
          width={393}
          height={394}
          alt="hero"
          className="rounded-full mx-auto mt-[-20px]" // Adjust the mt value as needed
        />
      </div>
    </section>
  );
};

export default Hero;
