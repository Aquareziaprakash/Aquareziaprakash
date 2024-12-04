import React from "react";

function Header() {
    return (
        <header style={styles.header}>
            <h1>My React Website</h1>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: "#Ac8968",
        color: "3362E",
        padding: "10px",
        textAlign: "center",
    },
};

export default Header;
