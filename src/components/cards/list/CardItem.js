import React from "react";

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardList.css";
import { withRouter } from "react-router-dom";

function CardItem({ id, name, imageUrl, history }) {
    //
    let image = "https://img.scryfall.com/cards/large/front/f/b/fbd28be5-c493-433a-a19f-cace2214b83e.jpg?1562945806";

    if (imageUrl) {
        image = imageUrl;
    }

    return (
        <Card>
            <Card.Img variant="top" src={image} />
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
    imageUrl: PropTypes.string,
    history: PropTypes.object.isRequired
};

export default withRouter(CardItem);
