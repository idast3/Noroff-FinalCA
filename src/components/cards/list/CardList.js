import React, { useState, useEffect } from "react";
import fetchMock from "fetch-mock";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BASE_URL } from "../../../constants/API";
import mockCards from "../../../constants/cards";
import "./CardList.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "./CardItem";

export default function CardList() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        fetchMock.mock(BASE_URL, { cards: mockCards });

        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setCards(json.cards);
                setFilteredCards(json.cards);
            })
            .catch(error => console.log(error));
    }, []);

    function filterThroughCards(event) {
        const searchValue = event.target.value.toLowerCase();

        const searchedCards = cards.filter(function(card) {
            //
            const lowercaseCardName = card.name.toLowerCase();

            if (lowercaseCardName.startsWith(searchValue)) {
                return true;
            } else {
                return false;
            }
        });

        setFilteredCards(searchedCards);
    }

    return (
        <>
            <Form inline className="search">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={event => filterThroughCards(event)} />
            </Form>
            <Row>
                {filteredCards.map(card => {
                    const { id, name, imageUrl } = card;

                    return (
                        <Col sm={6} md={3} key={id}>
                            <CardItem id={id} name={name} imageUrl={imageUrl} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}
