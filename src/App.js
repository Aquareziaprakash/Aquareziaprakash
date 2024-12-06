import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    let name = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    return (
        <div>
            <Header name={name} />
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
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Column 1</h2>
                        <p>Some content...</p>
                    </Col>
                    <Col>
                        <h2>Column 2</h2>
                        <p>Some content...</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Column 3</h2>
                        <p>Some content...</p>
                    </Col>
                    <Col>
                        <h2>Column 4</h2>
                        <p>Some content...</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Column 5</h2>
                        <p>Some content...</p>
                    </Col>
                    <Col>
                        <h2>Column 6</h2>
                        <p>Some content...</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
