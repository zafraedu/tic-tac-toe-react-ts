export const Footer = () => {
	return (
		<footer
			className="
        font-mono
        group
        absolute bottom-0 inset-x-0
        text-center
        text-white/50
        hover:text-white
				cursor-pointer
      "
		>
			<a
				href="http://github.com/zafraedu"
				target="_blank"
				rel="noopener noreferrer"
			>
				Developed by
				<span
					translate="no"
					className="
          transition-all duration-300
          group-hover:[text-shadow:0_0_2px_rgba(255,255,255,0.6),0_0_6px_rgba(255,255,255,0.4)]
        "
				>
					{" "}
					@zafraedu
				</span>
			</a>
		</footer>
	);
};
