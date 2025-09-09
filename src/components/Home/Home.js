import React from "react";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Book Your Bus Tickets Online</h1>
                <p className={styles.heroSubtitle}>
                    Fast, easy, and secure bus ticket booking at your fingertips.
                </p>
                <button className={styles.bookButton}>Book Now</button>
            </section>

            {/* Search Section */}
            <section className={styles.searchSection}>
                <h2>Search for Buses</h2>
                <form className={styles.searchForm}>
                    <input type="text" placeholder="From" />
                    <input type="text" placeholder="To" />
                    <input type="date" />
                    <button type="submit">Search</button>
                </form>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featureCard}>
                    <h3>Multiple Routes</h3>
                    <p>Travel to major cities and towns with ease.</p>
                </div>
                <div className={styles.featureCard}>
                    <h3>Safe & Secure</h3>
                    <p>Secure payments and verified bus operators.</p>
                </div>
                <div className={styles.featureCard}>
                    <h3>Easy Booking</h3>
                    <p>Book your tickets quickly with real-time seat availability.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
