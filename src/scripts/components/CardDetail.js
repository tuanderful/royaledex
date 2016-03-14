import React, { PropTypes } from 'react';
import Stat from './Stat';

function getStyles() {
    return {
        width: '330px',
        float: 'left',
    };
}

const CardDetail = ({ card, onClick }) => {
    const imageURL = require(`../../images/cards/230/${card.id}.png`);

    // TODO: iterate through the card's keys and output. delete non-sensical keys
    // (such as targets, speed) from the data.
    return (
        <div style={getStyles()}>
            <img src={imageURL} onClick={onClick} />
            <Stat card={card} statKey="name" />
            <Stat card={card} statKey="rarity" />
            <Stat card={card} statKey="type" />
            <Stat card={card} statKey="hitSpeed" />
            <Stat card={card} statKey="targets" />
            <Stat card={card} statKey="speed" />
            <Stat card={card} statKey="range" />
            <Stat card={card} statKey="deployTime" />
            <Stat card={card} statKey="count" />
            <Stat card={card} statKey="cost" />
            <Stat card={card} statKey="unlocks_at" />
            <i>{card.text}</i>
        </div>
    );
};


CardDetail.propTypes = {
    card: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CardDetail;
