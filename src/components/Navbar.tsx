import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex space-x-6">
          <a href="#services" className="btn-glass-glow">Services</a>
          <a href="#about" className="btn-glass-glow">About</a>
          <a href="#contact" className="btn-glass-glow">Contact</a>
        </nav>
      </div>
    </header>
  );
}
