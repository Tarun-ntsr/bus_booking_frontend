import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>About Our Bus Booking System</h1>
            <p className={styles.description}>
                Welcome to our Bus Booking System! We provide a seamless experience to book bus tickets online, check schedules, and manage your trips easily. Our platform ensures convenience, reliability, and secure payments for all travelers.
            </p>

            <div className={styles.features}>
                <div className={styles.featureCard}>
                    <h2>Easy Booking</h2>
                    <p>Book your bus tickets in just a few clicks with real-time seat availability.</p>
                </div>
                <div className={styles.featureCard}>
                    <h2>Multiple Routes</h2>
                    <p>Choose from a wide range of routes covering all major cities and towns.</p>
                </div>
                <div className={styles.featureCard}>
                    <h2>Secure Payments</h2>
                    <p>Pay safely using multiple payment options including credit cards and UPI.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
