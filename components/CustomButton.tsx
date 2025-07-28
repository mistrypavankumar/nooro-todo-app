import Link from "next/link";
import React from "react";

const CustomButton = ({
  href,
  label,
  Icon,
  onClick,
}: {
  href?: string;
  label: string;
  Icon: React.ElementType;
  onClick?: () => void;
}) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className="w-[min(90%,736px)] py-[10px] cursor-pointer flex items-center justify-center gap-2 mx-auto rounded-lg bg-button-bg absolute -bottom-[25px] left-1/2 transform -translate-x-1/2"
        >
          <span className="text-foreground text-[20px]">{label}</span>
          <Icon className="text-foreground text-2xl" />
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="w-[min(90%,736px)] text-foreground text-[20px] py-[10px] cursor-pointer flex items-center justify-center gap-2 mx-auto rounded-lg bg-button-bg absolute -bottom-[25px] left-1/2 transform -translate-x-1/2"
        >
          <span>{label}</span>
          <Icon className="text-foreground text-2xl" />
        </button>
      )}
    </>
  );
};

export default CustomButton;
