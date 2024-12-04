import React from "react";

function Sidebar() {
    return (
        <aside style={styles.sidebar}>
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#support">Support</a></li>
            </ul>
        </aside>
    );
}

const styles = {
    sidebar: {
        width: "200px",
        padding: "10px",
        backgroundColor: "#f4f4f4",
        float: "right",
        display: "flex",
    },
};

export default Sidebar;
