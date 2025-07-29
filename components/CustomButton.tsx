import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  href?: string;
  label: string;
  Icon: React.ElementType;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const CustomButton = ({
  href,
  label,
  Icon,
  onClick,
  type = "button",
}: CustomButtonProps) => {
  const buttonStyle =
    "w-full py-[10px] cursor-pointer flex items-center justify-center gap-2 mx-auto rounded-lg bg-button-bg/80 hover:bg-button-bg transition-color duration-300";

  return (
    <>
      {href ? (
        <Link href={href} className={buttonStyle}>
          <span className="text-foreground text-[20px]">{label}</span>
          <Icon className="text-foreground text-2xl" />
        </Link>
      ) : (
        <button onClick={onClick} className={buttonStyle}>
          <span className="text-foreground text-[20px]">{label}</span>
          <Icon className="text-foreground text-2xl" />
        </button>
      )}
    </>
  );
};

export default CustomButton;
