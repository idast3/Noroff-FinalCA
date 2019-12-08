import React from 'react';

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardList.css";
import { withRouter } from "react-router-dom";


function CardItem({ id, name, imageUrl, history }) {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="dark" block onClick={() => history.push(`/card/${id}`)}>
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
    history: PropTypes.object.isRequired,
};

export default withRouter(CardItem);
