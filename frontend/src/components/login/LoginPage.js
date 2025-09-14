
import LoginForm from "./Forms/LoginForm";
import Promo from "./PromoSection/Promo"

export default function LoginPage() {
  return (
    <div className="h-screen md:h-full  flex  justify-center items-center bg-[radial-gradient(circle_at_top_left,#c9d4e6_0%,white_100%)] mb-5 py-6  ">
      <LoginForm/>
      <Promo/>
     
    </div>
  );
}