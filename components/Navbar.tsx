"use client";

import { logoImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import CustomButton from "./CustomButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="h-[230px] md:h-[280px]">
      <div className="relative h-[150px] bg-primary md:h-[200px]">
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
        {pathname === "/" && (
          <div className="w-[min(90%,736px)] absolute -bottom-[25px] left-1/2 transform -translate-x-1/2 flex justify-center">
            <CustomButton
              href="/create-task"
              label="Create Task"
              Icon={IoAddCircleOutline}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
