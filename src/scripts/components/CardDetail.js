import React, { PropTypes } from 'react';
import Stat from './Stat';
import Container from './Container';



const CardDetail = ({ card, onClick }) => {
    const imageURL = require(`../../images/cards/230/${card.id}.png`);

    // TODO: iterate through the card's keys and output. delete non-sensical keys
    // (such as targets, speed) from the data.
    return (
        <Container>
            <img src={imageURL} onClick={onClick} />

            {Object.keys(card).filter((k) => (['id', 'stats', 'text'].indexOf(k) === -1))
                .map((k, index) => (
                    <Stat card={card} key={index} statKey={k} />
                )
            )}

            <i>{card.text}</i>
        </Container>
    );
};


CardDetail.propTypes = {
    card: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CardDetail;
