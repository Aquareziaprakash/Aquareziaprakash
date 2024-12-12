import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { blog } from "./Data/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

function App() {
    const name = {
        firstName: "Prakash",
        lastName: "Koirala",
        age: 30,
    };

    return (
        <div>
            {/* Header Section */}
            <Header name={name} email="aquareziaprakash@gmail.com">
                <p>Welcome to my website!  <FontAwesomeIcon icon={faWhatsapp} className="text-success" /></p>
            </Header>

            {/* Navigation Bar */}
            <Navbar />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>

            {/* Main Content Section */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MainContent />
                <MainContent />
                <MainContent />
                <MainContent />
                <Sidebar />
            </div>
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
            </Container>

            {/* Product Items Section */}
            <Container>
                <Row>
                    {blog.map((item, index) => (
                        <ProductItem key={index} title={item.title} description={item.description} />
                    ))}
                </Row>
            </Container>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

function ProductItem({ title, description }) {
    return (
        <Col lg="3" md="6">
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        Go Somewhere
                    </Button>
                </CardActions>
            </Card>
        </Col>
    );
}

export default App;
