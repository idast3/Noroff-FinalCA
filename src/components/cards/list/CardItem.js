import React from 'react';

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardList.css";

function CardItem({ id, name, imageUrl }) {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="dark" block>
                    View
                </Button>
            </Card.Body>
        </Card>
    );
}

CardItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default CardItem;
