import ButtonLogin from "../ui/ButtonLogin";
import ButtonSignUp from "../ui/ButtonSignUp";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center gap-x-5">
                <a href="#" className="text-gray-600 hover:text-black">Home</a>
                <a href="#" className="text-gray-600 hover:text-black">Rooms</a>
                <a href="#" className="text-gray-600 hover:text-black">About Us</a>
                <a href="#" className="text-gray-600 hover:text-black">Contact</a>
                <ButtonLogin />
                <ButtonSignUp />
        </nav>
    );
}