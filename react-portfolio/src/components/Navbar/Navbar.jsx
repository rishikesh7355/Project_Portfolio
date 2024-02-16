import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuClose, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuClose ? getImageUrl("nav/menuIcon.png"):getImageUrl("nav/closeIcon.png")} 
                    alt="menu-btns" 
                    onClick={() => setMenuOpen(!menuClose)}
                />
                <ul
                    className={`${styles.menuItems} ${menuClose && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/'>Experience</a>
                    </li>
                    <li>
                        <a href='/'>Projects</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}