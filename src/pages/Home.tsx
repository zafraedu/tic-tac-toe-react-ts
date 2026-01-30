import { Button } from "../components/ui/Button";
import { Header } from "../components/ui/Header";

export const Home = () => {
	return (
		<div className="h-screen w-full flex flex-col justify-center overflow-hidden px-10">
			<Header />
			<section className="flex flex-col items-center justify-center gap-5">
				<Button to="/ChooseGameMode" variant="blue">PLAY</Button>
				{/* <Button to="/Settings" variant="orange">SETTINGS</Button> */}
			</section>
			<span></span>
		</div>
	);
};
