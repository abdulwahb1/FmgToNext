import Image from "next/image";

const Offer = () => {
  return (
    <div className="flex flex-col mr-auto pb-2">
      <div className="flex flex-col mt-[105px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1321"
          height="12"
          viewBox="0 0 1321 12"
          fill="none"
        >
          <path
            d="M1309.67 6.00011C1309.67 8.94563 1312.05 11.3334 1315 11.3334C1317.95 11.3334 1320.33 8.94563 1320.33 6.00011C1320.33 3.05459 1317.95 0.666774 1315 0.666773C1312.05 0.666773 1309.67 3.05459 1309.67 6.00011ZM-9.39447e-08 7L1315 7.00011L1315 5.00011L9.39447e-08 5L-9.39447e-08 7Z"
            fill="url(#paint0_linear_138_129)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_138_129"
              x1="81.1447"
              y1="-18.9883"
              x2="657.105"
              y2="15.5852"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A80183" />
              <stop offset="1" stopColor="#FF68E7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col mt-10">
        <p className="font-sens text-[55px] font-bold leading-[65px] ml-[250px]">
          We offer a creative services partnership <br />
          you can't run your biz without.
        </p>
        <p className="text-pink text-[32px] not-italic font-light leading-[41px] ml-[250px] mt-5 font-sens  ">
          Working with us is a no-brainer. You'll get:
        </p>
      </div>
      <div className="flex flex-row ml-[279px] mt-5">
        <div className="flex flex-row">
          <ul className="list-disc text-[18px] font-light leading-[28px]">
            <li>
              On-demand, professional graphic design support with <br /> proven
              experience and creativity in both consumer <br />
              and B2B markets <br />{" "}
            </li>
            <li>
              {" "}
              Flat-fee pricing, so you can plan <br />{" "}
            </li>
            <li>Built-in marketing and brand consulting, if you need it</li>
          </ul>
        </div>
        <div className="flex flex-row ml-[101px]">
          <ul className="list-disc text-[18px] font-light leading-[28px]">
            <li>
              Think-ahead, dependable, reliable partnership. <br />
            </li>
            <li>
              Flexible hours, because we know businesses <br />
              need support outside of the 9-to-5 window <br />
            </li>
            <li>
              A female perspective complete with empathy, <br />
              compassion, integrity and business savvy
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col mt-[105px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1321"
          height="12"
          viewBox="0 0 1321 12"
          fill="none"
        >
          <path
            d="M1309.67 6.00011C1309.67 8.94563 1312.05 11.3334 1315 11.3334C1317.95 11.3334 1320.33 8.94563 1320.33 6.00011C1320.33 3.05459 1317.95 0.666774 1315 0.666773C1312.05 0.666773 1309.67 3.05459 1309.67 6.00011ZM-9.39447e-08 7L1315 7.00011L1315 5.00011L9.39447e-08 5L-9.39447e-08 7Z"
            fill="url(#paint0_linear_138_129)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_138_129"
              x1="81.1447"
              y1="-18.9883"
              x2="657.105"
              y2="15.5852"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A80183" />
              <stop offset="1" stopColor="#FF68E7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Offer;
