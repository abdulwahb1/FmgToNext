"use client";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex w-full">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="assets/images/logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="ml-[42px] mt-4"
          />
        </Link>
      </div>
      <div className="flex flex-col w-full mt-10">
        <div className="flex items-center">
          <div className="flex items-center pl-[50px] ml-auto">
            <Link
              href="/"
              className="flex items-center mr-[15px] mb-[45px] cursor-pointer"
            >
              <Image
                src="assets/icons/arrow.svg"
                alt="arrow"
                width={41}
                height={41}
              />
            </Link>

            <p className="text-pink text-[35px] font-bold font-sens leading-[45px] mb-[50px]">
              Start here
            </p>

            <Link
              href="/"
              className="flex items-center ml-[25px] mb-[40px] cursor-pointer mr-5"
            >
              <Image
                src="assets/icons/menu.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="assets/icons/headerline.svg"
            alt="line"
            width={1183}
            height={0}
            className="ml-auto pb-10 mb-[90px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
