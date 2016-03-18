import React, { PropTypes } from 'react';
import CONST from '../CONST.js';
import Container from './Container';
import CardDetail from './CardDetail/CardDetail.js';

function getStyles() {
    const topOffset = CONST.HEADER_HEIGHT + 20 + 5;

    return {
        width: '780px',
        position: 'fixed',
        top: `${topOffset}px`,
        right: '0',
    };
}

function getContainerStyles() {
    return {
        width: '330px',
        float: 'left',
        marginRight: '20px',
    };
}

const CardCompare = ({ cards, onCardClick }) => (
    <ul style={getStyles()}>
        {cards.map((card, index) =>
            <Container styles={getContainerStyles()}>
                <CardDetail
                  key={index}
                  card={card}
                  onClick={function _handleClick() {
                      onCardClick(card.id);
                  }}
                />
            </Container>
        )}
    </ul>
);

CardCompare.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onCardClick: PropTypes.func.isRequired,
};

export default CardCompare;
