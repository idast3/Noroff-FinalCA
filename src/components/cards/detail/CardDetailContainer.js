import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../../constants/API";
import "./CardDetail.css";
import CardDetail from "./CardDetail";

export default class CardDetailContainer extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    state = {
        details: null,
        loading: true
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const url = `${BASE_URL}/${id}`;

        try {
            const response = await fetch(url);
            const json = await response.json();

            console.log("json", json);

            this.setState({
                details: json.card,
                loading: false
            });
        } catch (error) {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const { loading, details } = this.state;

        if (loading || !details) {
            return <Spinner animation="border" className="spinner" />;
        }

        return <CardDetail details={details} />;
    }
}
