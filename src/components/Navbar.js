import React from "react";

function Navbar() {
    return (
        <nav style={styles.nav}>
            <ul style={styles.navList}>
                <li style={styles.navItem}><a href="#home">Home</a></li>
                <li style={styles.navItem}><a href="#about">About</a></li>
                <li style={styles.navItem}><a href="#services">Services</a></li>
                <li style={styles.navItem}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        backgroundColor: "#C2B9B0",
        padding: "10px",

    },
    navList: {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around",
        margin: 0,
        padding: 0,
        position: "80% center",
    },
    navItem: {
        color: "#ffff",
        fontSize: "18px",
        padding: "10px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "color 0.3s",
        textDecoration: "none",
        textColor: "Black",
        linkcolor: "black"
    },
};

export default Navbar;
