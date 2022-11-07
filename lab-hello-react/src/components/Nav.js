import ironhackLogo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <img src={ironhackLogo} alt="logo" />
      </div>
      <div>
        <img src={menu} alt="menu" className="" />
      </div>
    </nav>
  );
}
