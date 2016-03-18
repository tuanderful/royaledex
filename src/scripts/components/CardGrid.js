import React, { PropTypes } from 'react';
import CardThumbnail from './CardThumbnail';
import CONST from '../CONST';

function getStyles(numCol = 4) {
    const width = numCol * ((CONST.THUMB_WIDTH / 2) + (2 * CONST.THUMB_MARGIN));
    return {
        width: `${width}px`,
        listStyleType: 'none',
        float: 'left',
    };
}

const CardGrid = ({ cards, onCardClick }) => (
    <ul style={getStyles()}>
        {cards.map((card, index) =>
            <CardThumbnail
              key={index}
              {...card}
              onClick={function _handleClick() {
                  onCardClick(card.id);
              }}
            />
        )}
    </ul>
);

CardGrid.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onCardClick: PropTypes.func.isRequired,
};

export default CardGrid;
