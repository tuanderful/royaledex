import React, { PropTypes } from 'react';


const CardDetailSummary = ({ card }) => {
    const imageURL = require(`../../../images/cards/230/${card.id}.png`);
    const classificationClassName = `classification ${card.rarity}`;

    return (
        <div className="Summary">
            <img src={imageURL} />

            <p className={classificationClassName}>
                Rarity: {card.rarity}
                Type: {card.type}
            </p>
            <p className="caption">{card.text}</p>
        </div>
    );
};


CardDetailSummary.propTypes = {
    card: PropTypes.object.isRequired,
};

export default CardDetailSummary;
