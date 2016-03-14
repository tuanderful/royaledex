import React, { PropTypes } from 'react';
import CardDetail from './CardDetail';

function getStyles() {
    return {
        background: 'none',
    };
}

const CardCompare = ({ cards, onCardClick }) => (
    <ul style={getStyles()}>
        {cards.map((card, index) =>
            <CardDetail
              key={index}
              card={card}
              onClick={function _handleClick() {
                  onCardClick(card.name);
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
