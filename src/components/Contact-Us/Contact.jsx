import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[84px]">
      <div className="flex flex-col">
        <h1 className="text-center text-[55px] not-italic font-bold leading-[77px] tracking-wider">
          Exhale. We can help.
        </h1>
        <p className="text-pink text-center text-[32px] not-italic font-light leading-[41px]">
          Give yourself some time to breathe — let's chat to see how we can{" "}
          <br />
          take some of the creative off your plate.
        </p>
        <div className="flex flex-row justify-center items-center mt-[49px]">
          <svg
            width="41.074"
            height="41.074"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24.5" cy="24.5" r="24.5" fill="#EA19E2" />
            <path
              d="M25.1542 24.1406L20.3136 19.2999L22.7339 16.8796L29.9947 24.1406L22.7339 31.4013L20.3136 28.9811L25.1542 24.1406Z"
              fill="white"
            />
          </svg>
          <p className="text-pink text-center text-[35px] not-italic font-bold leading-[77px] tracking-wide ml-3">
            Contact Us
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
