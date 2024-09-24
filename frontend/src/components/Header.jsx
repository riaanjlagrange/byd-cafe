import NavBar from "./NavBar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex w- z-50 justify-between items-end px-10 py-5 shadow-sm shadow-gray-300">
      <Logo size="50" />
      <NavBar />
    </header>
  );
}

export default Header;
