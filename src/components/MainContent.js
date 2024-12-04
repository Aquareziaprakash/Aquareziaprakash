import React from "react";

function MainContent() {
    return (
        <main style={styles.main}>
            <h2>Welcome to My Website</h2>
            <p>This is a simple webpage created with React components.</p>
        </main>
    );
}

const styles = {
    main: {
        bagroundcolor: '865D36',
        padding: "20px",
        textAlign: "left",
        color: "Black",
        marginTop: "50px",
        marginBottom: "50px",
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        position: 'relative',
    },
};

export default MainContent;
