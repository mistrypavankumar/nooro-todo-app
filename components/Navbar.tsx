import { logoImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="bg-primary h-[150px] md:h-[200px]">
      <div className="relative border-2 h-[150px] md:h-[200px]">
        <div className="flex items-center justify-center h-full">
          <Link
            href="/"
            className="text-secondary font-bold flex items-baseline-last justify-center gap-3"
          >
            <Image
              src={logoImg}
              alt="Logo"
              className="inline-block"
              width={20}
              height={20}
            />
            <p className="text-[40px] md:text-[50px]">
              Todo <span className="text-purple">App</span>
            </p>
          </Link>
        </div>
        <CustomButton label="Create Task" Icon={IoAddCircleOutline} />
      </div>
    </nav>
  );
};

export default Navbar;
