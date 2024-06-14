import Image from 'next/image';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between pt-4 px-4">
            <Image src="/logo.png" width={80} height={80} alt="logo" />
            <Navbar />
        </header>
    );
}

export default Header;