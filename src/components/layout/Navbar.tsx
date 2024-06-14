import ButtonLogin from "../ui/button/ButtonLogin";
import ButtonSignUp from "../ui/button/ButtonSignUp";
import { ThemeSwitcher } from "../ui/button/ThemeSwitcher";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center gap-x-5">
                <a href="#" className="text-gray-600 hover:text-white">Home</a>
                <a href="#" className="text-gray-600 hover:text-white">Rooms</a>
                <a href="#" className="text-gray-600 hover:text-white">About Us</a>
                <a href="#" className="text-gray-600 hover:text-white">Contact</a>
                <ThemeSwitcher />
                <ButtonLogin />
                <ButtonSignUp />
        </nav>
    );
}

export default Navbar;