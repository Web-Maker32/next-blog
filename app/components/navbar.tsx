import Link from "next/link";
import styles from "./navbar.module.css";

interface NavbarProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

export default function Navbar({ isMobile, closeMenu }: NavbarProps) {
  return (
    <nav className="font-mono">
      <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'flex-row items-center gap-1 md:gap-4'}`}>
        <li>
          <Link href="/" className={styles.link} onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link href="/about/projects" className={styles.link} onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link href="/photos" className={styles.link} onClick={closeMenu}>Photos</Link>
        </li>
      </ul>
    </nav>
  );
}