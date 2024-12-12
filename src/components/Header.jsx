import React from "react";
import image from "../images/Image.png"; // Assuming this is the correct path

function Header({ name, email, children }) {
    console.log(name);
    console.log(name.firstName + " " + name.lastName);
    console.log(email);

    return (
        <header style={styles.header}>
            <h1>
                <img
                    src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Header Image"
                    style={styles.img}
                />
                My React Website {name.firstName + " " + name.lastName}
            </h1>
            {children}
            <p>{email}</p>
            <img
                src={image}
                alt="Profile"
                style={styles.img} // Apply the image styling here
            />
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

    img: {
        width: "50px", // Adjusted size for visual clarity
        height: "50px", // Adjusted size for visual clarity
        borderRadius: "50%",
        marginLeft: "10px",
    },
};

export default Header;
