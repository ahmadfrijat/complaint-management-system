import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Logo from './assets/Vegetables.png';
import Header from '../header/header';






// home page
function Home() {
    return (
        <>
            <Header />
            <div style={{ display: "flex" }}>

                <div style={{ width: '100%' }}>
                    <Card.Img variant="top" src={Logo} style={{ width: "600px", height: "600px", marginLeft: "10%" }} />
                </div>
                <div style={{ width: "-webkit-fill-available", padding: "10%" }}>
                    <Card.Title style={{ fontSize: "52px" }}>Fresh & Healthy Organic Vegetables</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button style={{ margin: "2%", backgroundColor: "var(--bs-orange)" }} variant="primary">Go somewhere</Button>
                    <Button style={{ margin: "2%", backgroundColor: "#009400d4" }} variant="primary">Go somewhere</Button>

                </div>
            </div>

        </>
    )
}

export default Home
