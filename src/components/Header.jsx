import React from "react";
import image from "../images/image.png";

function Header({ name, email, children }) {
    console.log(name);
    console.log(name.firstName + " " + name.lastName);
    console.log(email);

    return (
        <header style={styles.header}>
            <h1> <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />My React Website {name.firstName + " " + name.lastName}</h1>
            {children}
            <p>{email}</p>
            <img src={image} alt="" srcset="" />
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
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        marginLeft: "10px"
    }
};

export default Header;
