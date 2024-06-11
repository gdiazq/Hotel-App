import Image from 'next/image';

export default function Header() {
    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Image src="/logo.png" width={80} height={80} alt="logo" />
            <nav className="flex items-center justify-center">
                <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 ml-5">Rooms</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 ml-5">About Us</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 ml-5">Contact</a>
            </nav>
        </header>
    );
}