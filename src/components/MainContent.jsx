import React from "react";

function MainContent() {
    return (
        <main style={styles.main} className="alert alert-info">
            <h2>Welcome to My Website</h2>
            <p>This is a simple webpage created with React components.</p>
        </main>
    );
}

const styles = {
    main: {

        bagroundcolor: '865D36',
        padding: "20px",
        width: "70%",
        margin: "20px",
        // display: "flex",
        fontFamily: "Arial, sans-serif",
        fontSize: "12px",
        textAlign: "left",
        color: "Black",
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        position: 'relative',
        overflowwrap: "anywhere",
    },
};

export default MainContent;
