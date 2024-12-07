import React from "react";

function Header({ name, email, children }) {
    console.log(name);
    console.log(name.firstName + " " + name.lastName);
    console.log(email);

    return (
        <header style={styles.header}>
            <h1>My React Website {name.firstName + " " + name.lastName}</h1>
            {children}
            <p>{email}</p>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: "#Ac8968",
        color: "#3362E1", // Corrected the color value
        padding: "10px",
        textAlign: "center",
    },
};

export default Header;
