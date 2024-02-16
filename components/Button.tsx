type ButtonProps = {
  variant:
    | "btn_dark_green"
    | "btn_white_text"
    | "btn_green"
    | "btn_white"
    | "btn_dark_green_outline";
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
};

import Image from "next/image";

const Button = ({ variant, type, title, icon, full }: ButtonProps) => {
  return (
    <button
      className={`rounded-full flex flexCenter gap-2 border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && (
        <Image
          src={`/${icon}`}
          width={24}
          height={24}
          alt={`${title}_${Math.floor(Math.random() * 10)}`}
        />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
