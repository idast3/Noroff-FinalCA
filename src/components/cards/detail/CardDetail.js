import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./CardDetail.css";
import DetailList from "./DetailList";

export default function CardDetail({ details }) {
    const { name, imageUrl, text, rarity, colors } = details;

    console.log("colors", colors);

    return (
        <Row>
            <Col md={6} className="detail-image">
                <Image src={imageUrl} roundedCircle />
            </Col>
            <Col>
                <h1>{name}</h1>
                <DetailList text={text} rarity={rarity} colors={colors} />
            </Col>
        </Row>
    );
}

CardDetail.propTypes = {
    details: PropTypes.object.isRequired
};
