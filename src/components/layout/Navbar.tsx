import ButtonLogin from "../ui/button/ButtonLogin";
import ButtonSignUp from "../ui/button/ButtonSignUp";
import { ThemeSwitcher } from "../ui/button/ThemeSwitcher";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center gap-x-5">
                <a href="#" className="text-gray-600 hover:text-black">Home</a>
                <a href="#" className="text-gray-600 hover:text-black">Rooms</a>
                <a href="#" className="text-gray-600 hover:text-black">About Us</a>
                <a href="#" className="text-gray-600 hover:text-black">Contact</a>
                <ThemeSwitcher />
                <ButtonLogin />
                <ButtonSignUp />
        </nav>
    );
}

export default Navbar;