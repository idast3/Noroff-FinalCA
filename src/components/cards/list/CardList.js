import React, { useState, useEffect } from "react";
import fetchMock from "fetch-mock";
import { BASE_URL } from "../../../constants/API";
import mockCards from "../../../constants/cards";
import "./CardList.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "./CardItem";


export default function CardList() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetchMock.mock(BASE_URL, { cards: mockCards });

        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => setCards(json.cards))
            .catch(error => console.log(error));
    }, []);

    return (
      <Row>
     {cards.map(card => {
         const { id, name, imageUrl } = card;

         return (
             <Col sm={6} md={3} key={id}>
                 <CardItem id={id} name={name} imageUrl={imageUrl} />
             </Col>
         );
     })}
 </Row>
    );
}
