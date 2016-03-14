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

            {Object.keys(card).filter((k) => (['id', 'stats', 'text'].indexOf(k) === -1))
                .map((k, index) => (
                    <Stat card={card} key={index} statKey={k} />
                )
            )}

            <i>{card.text}</i>
        </div>
    );
};


CardDetail.propTypes = {
    card: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CardDetail;
