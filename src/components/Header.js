import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { LaptopIcon, MenuIcon } from './icons';

export default function Header() {
    return (
        <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
                <LaptopIcon className="h-6 w-6" />
                <span className="text-lg font-semibold">YEK Consulting</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/services" className="hover:underline">Services</Link>
                <Link to="/pricing" className="hover:underline">Pricing</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
            <Button variant="outline" size="sm" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
            </Button>
        </header>
    );
}
