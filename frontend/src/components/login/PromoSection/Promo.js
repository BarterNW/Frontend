import Logo from "./Logo";
import Card from "./Card";
import EndText from "./EndText";

export default function Promo() {
  return (
    <div className=" hidden md:block w-[47.5%] h-[41.5rem] flex flex-col items-center bg-[#061C47] px-6 text-center ">
      <Logo/>
      <Card
        img="/card/zeroCom.png"
        title="Zero Commission"
        cont="Lose instantly connect sponsors with the most relevant events using intelligent algo."
      />
      <EndText />
    </div>
  );
}