import NavBar from "./NavBar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex w- z-50 justify-between items-end px-10 py-5 shadow-sm shadow-gray-300">
		<div className="flex items-center justify-center gap-5">
		  <Logo size="30" />
			<span className="text-xl font-bold text-Mocha">BYD Cafe</span>
	    </div>
		<NavBar />
    </header>
  );
}

export default Header;
