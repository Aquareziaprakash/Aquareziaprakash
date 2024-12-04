import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MainContent />
                <MainContent />
                <MainContent />
                <MainContent />
                <Sidebar />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MainContent />
                <MainContent />
                <MainContent />
                <MainContent />
            </div>
            <Footer />
        </div>
    );
}

export default App;
