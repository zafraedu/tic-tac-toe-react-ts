import { Link } from "react-router-dom";

type ButtonProps = {
	children: React.ReactNode;
	to: string;
	variant?: "blue" | "orange";
};

const variants = {
	blue: {
		hoverBg: "hover:bg-[#008cff]",
		hoverBorder: "hover:border-[#008cff]",
		hoverShadow:
			"hover:[box-shadow:0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff]",
	},
	orange: {
		hoverBg: "hover:bg-[#ff8c00]",
		hoverBorder: "hover:border-[#ff8c00]",
		hoverShadow:
			"hover:[box-shadow:0_0_5px_#ff8c00,0_0_20px_#ff8c00,0_0_50px_#ff8c00,0_0_100px_#ff8c00]",
	},
};

export const Button = ({ children, to,  variant = "blue" }: ButtonProps) => {
	const v = variants[variant];

	return (
		<Link
			to={to}
			className={`
				text-center
        w-full
				font-orbitron
				tracking-widest
        px-[20px] py-[10px]
        rounded-[8px]
        text-[17px]
        font-medium
        bg-transparent
        cursor-pointer
        border border-white
        transition-all duration-500 ease-in-out
        select-none

        hover:text-white
        hover:[text-shadow:0_0_5px_#ffffff,0_0_10px_#ffffff,0_0_20px_#ffffff]

        focus:text-white
        focus:[text-shadow:0_0_5px_#ffffff,0_0_10px_#ffffff,0_0_20px_#ffffff]

        ${v.hoverBg}
        ${v.hoverBorder}
        ${v.hoverShadow}

        focus:${v.hoverBg.replace("hover:", "")}
        focus:${v.hoverBorder.replace("hover:", "")}
        focus:${v.hoverShadow.replace("hover:", "")}
      `}
		>
			{children}
		</Link>
	);
};
