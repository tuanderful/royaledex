import React, { PropTypes } from 'react';

const CardDetail = ({ card }) => (
    <div>
        {card.name}
    </div>
);

CardDetail.propTypes = {
    card: PropTypes.object.isRequired,
};

export default CardDetail;
