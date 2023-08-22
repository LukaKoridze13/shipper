import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <header className="w-full py-5 px-12 flex justify-between items-center absolute  z-10 bg-[#64B5DC]">
      <img className="w-52" src={Logo} alt="Shipper Logo" />
      <nav>
        <ul className="flex gap-x-11 items-center">
          <Li text="Price" />
          <Li text="Shops" />
          <Li text="Turkey Shops" />
          <Li text="News" />
          <Li text="Contact us" />
        </ul>
      </nav>
      <div className="flex gap-4 items-center">

<Link to='/login' ><button style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className="text-[25px] h-12 p px-10 rounded-3xl bg-[#FCCD46] text-white">
          Log in
        </button>  </Link>        
        <button style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.23)" }} className="text-[25px] h-12 box-border px-10 rounded-3xl bg-transparent border-2 border-solid border-[#FCCD46] text-white">
          Sign up
        </button>
      </div>
    </header>
  );
}

const Li = ({ text }: { text: string }) => {
  return <li className="text-white font-sans text-[25px] cursor-pointer">{text}</li>;
};
