import Link from 'next/link';
import NavLinks from './NavLinks';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold hover:opacity-90">My Portfolio</Link>
                <NavLinks />
            </nav>
        </header>
    );
}