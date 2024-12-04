import React from "react";

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 My React Website. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "beige",
        color: "Black",
        textAlign: "center",
        padding: "10px",
        marginTop: "20px",
        position: "fixed",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid #ccc",
        zIndex: 100,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.5",
        overflow: "hidden"

    },
};

export default Footer;
