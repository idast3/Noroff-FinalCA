import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function DetailList({ text, rarity, colors }) {
    return (
        <ListGroup>
            <ListGroup.Item>
                <b>About</b>: {text}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Rarity</b>: {rarity}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Color</b>: {colors.toString()}
            </ListGroup.Item>
        </ListGroup>
    );
}

DetailList.propTypes = {
    text: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired
};
