import React, { PropTypes } from 'react';
import CardDetail from './CardDetail';

function getStyles() {
    return {
        width: '660px',
        float: 'left',
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
