import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="flex flex-row ">
        <div className="flex flex-col ml-[80px] pt-[113px]">
          <Image
            src="assets/images/Woman.svg"
            width={400}
            height={400}
            alt="lady"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col w-[558px] h-[205px] mt-[53px] ml-[133px]">
          <h2 className="text-[55px] not-italic font-bold leading-[65px] tracking-wide">
            We believe women run the world<span className="text-pink">.</span>
          </h2>
          <p className="text-[32px] not-italic font-light text-pink leading-10 mt-4">
            Get that workout in. Go to your son's game. Meet your girlfriends
            out. We'll handle the little bits and bobs, the time-suck creative
            tasks that rob you of your precious time.{" "}
          </p>
          <p className="text-[18px] mt-5 not-italic font-light leading-5">
            We know it takes unbelievable stamina and brainpower to run your
            business, and we can assure you you'll feel relieved to finally find
            a creative partner that just gets it and knows how to make your
            business look as good as you do with a new pair of shoes and a full
            night's sleep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
