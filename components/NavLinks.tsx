'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <ul className="flex gap-6">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`transition-colors hover:underline ${isActive ? 'font-bold underline text-yellow-200' : ''
                                }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}