import Header from "./Header";
import SocialLogin from "./SocialLogin";
import Divider from "./Divider";
import Inputs from "./Inputs";
import SwitchLink from "./SwitchLink";
import Footer from "./Footer";

export default function LoginForm() {
    return (
      <div className="w-full h-screen md:w-[47.5%] md:h-full flex flex-col justify-center items-center py-6  md:my-auto bg-transparent">
        <Header head="Log In to Barter Now" cont="Deals That Power Events"/>
        <SocialLogin/>
        <Divider/>
        <Inputs/>
        <SwitchLink a="Don&apos;t have an account?" b="Sign Up"/>
        <Footer/>
      </div>
    );
  }