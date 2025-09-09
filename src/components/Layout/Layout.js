import React from "react";
import Link from "next/link"; // Next.js Link
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.layoutContainer}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">BusBooking</Link>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/bookings">My Bookings</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Main content */}
            <main className={styles.mainContent}>{children}</main>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} BusBooking. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
