import React, { PropTypes } from 'react';
import CONST from '../CONST.js';
import CardDetail from './CardDetail';

function getStyles() {
    const topOffset = CONST.HEADER_HEIGHT + 20 + 5;

    return {
        width: '760px',
        position: 'fixed',
        top: `${topOffset}px`,
        right: '0',
    };
}

const CardCompare = ({ cards, onCardClick }) => (
    <ul style={getStyles()}>
        {cards.map((card, index) =>
            <CardDetail
              key={index}
              card={card}
              onClick={function _handleClick() {
                  onCardClick(card.id);
              }}
            />
        )}
    </ul>
);

CardCompare.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onCardClick: PropTypes.func.isRequired,
};

export default CardCompare;
