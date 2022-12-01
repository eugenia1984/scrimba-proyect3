import "./HeaderStyles.css";
import logo from "../../assets/troll-face.svg";
import Logo from "./Logo";
import Title from "./Title";
import SubTitle from "./SubTitle";

function Header() {
  return (
    <header>
      <Logo logo={logo}/>
      <Title headline="Meme Generator"/>
      <SubTitle text="React Couse - Project 3"/>
    </header>
  );
}

export default Header;
