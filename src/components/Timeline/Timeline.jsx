import Image from "next/image";

const Timeline = () => {
  return (
    <section className="bg-black lg:w-[1443px] h-[529px] mt-[71px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col mt-[60px] ">
          <p className="text-white text-center text-[55px] not-italic font-bold leading-[77px] tracking-wide">
            Glass ceiling? What glass ceiling?
          </p>
          <p className="text-pink text-center text-[32px] not-italic font-light leading-[41px] mt-[18px]">
            These glass-busting brands are killing it
          </p>
        </div>
        <div className="flex flex-row mr-auto ">
          <svg
            width="11"
            height="175"
            viewBox="0 0 11 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[256px] mt-[104px]"
          >
            <path
              d="M5.5 0.666667C2.55448 0.666666 0.166667 3.05448 0.166667 6C0.166666 8.94552 2.55448 11.3333 5.5 11.3333C8.44552 11.3333 10.8333 8.94552 10.8333 6C10.8333 3.05448 8.44552 0.666667 5.5 0.666667ZM4.5 6L4.49999 175L6.49999 175L6.5 6L4.5 6Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col ml-[25px] mt-[100px]">
            <h4 className="text-white text-[21px] not-italic font-bold leading-[44px] tracking-wide">
              Capital Z
            </h4>
            <p className="text-pink text-[26px] not-italic font-bold leading-[44px]">
              Upscale, but make it fun.
            </p>
            <p className="text-white text-[23px] not-italic font-light leading-[31px]">
              Two busy moms and entrepreneurs <br />
              entrusted their brand-new retail line <br />
              to us.
            </p>
          </div>
          <svg
            width="11"
            height="175"
            viewBox="0 0 11 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[110px] mt-[104px]"
          >
            <path
              d="M5.5 0.666667C2.55448 0.666666 0.166667 3.05448 0.166667 6C0.166666 8.94552 2.55448 11.3333 5.5 11.3333C8.44552 11.3333 10.8333 8.94552 10.8333 6C10.8333 3.05448 8.44552 0.666667 5.5 0.666667ZM4.5 6L4.49999 175L6.49999 175L6.5 6L4.5 6Z"
              fill="white"
            />
          </svg>
          <div className="flex flex-col items-start ml-[25px] mt-[100px]">
            <h4 className="text-white text-[21px] not-italic font-bold leading-[44px] tracking-wide">
              HOLISTIC SOCIAL CLUB
            </h4>
            <p className="text-pink text-[26px] not-italic font-bold leading-[44px]">
              Ahhmazing concept made real.
            </p>
            <p className="text-white text-[23px] not-italic font-light leading-[31px]">
              Solopreneur and busy exec entrusted <br />
              us to design and build her concept to <br />
              make it reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
