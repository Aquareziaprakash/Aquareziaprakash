import React from "react";

function Header(props) {
    let { name } = props;
    console.log(name);
    console.log(name.firstName + " " + name.lastName);
    return (

        <header style={styles.header}>
            <h1>My React Website {name.firstName + " " + name.lastName} </h1>
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
