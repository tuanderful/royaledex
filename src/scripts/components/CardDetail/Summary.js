import React, { PropTypes } from 'react';

import { toProper } from '../../util/string';


const CardDetailSummary = ({ card }) => {
    const imageURL = require(`../../../images/cards/230/${card.id}.png`);
    const classificationClassName = `classification ${card.rarity}`;

    return (
        <div className="Summary">

            <div className="cardImage">
                <img src={imageURL} />
                <div className="level">Level {card._level}</div>
            </div>

            <div className={classificationClassName}>
                <span className="rarity">{toProper(card.rarity)}</span>
                <span className="type">{toProper(card.type)}</span>
            </div>
            <p className="caption">{card.text}</p>
        </div>
    );
};


CardDetailSummary.propTypes = {
    card: PropTypes.object.isRequired,
};

export default CardDetailSummary;
