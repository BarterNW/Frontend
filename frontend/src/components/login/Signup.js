import LoginForm from "./LoginForm";
import Promo from "./Promo"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[radial-gradient(circle_at_top_left,#c9d4e6_0%,white_100%)] mt-15 mb-15">
        <Promo/>
      <LoginForm/>
      
     
    </div>
  );
}