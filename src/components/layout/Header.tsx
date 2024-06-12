import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between">
            <Image src="/logo.png" width={80} height={80} alt="logo" />
            <Navbar />
        </header>
    );
}