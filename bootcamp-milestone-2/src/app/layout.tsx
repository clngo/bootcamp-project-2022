// Layout.tsx
import { Inter } from 'next/font/google'; // Import the Inter font
import Navbar from "../components/navbar"; // Use relative path for Navbar
import './globals.css'; // Import any global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Colin Ngo Archives',
    description: 'Welcome to Colin Ngo Archives',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar /> {/* This sets the navbar on every page */}
                {children} {/* This renders the content of each page */}
            </body>
        </html>
    );
}
