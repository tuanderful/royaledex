import React, { PropTypes } from 'react';

import CardDetailSummary from './Summary';
import CardDetailStats from './Stats';
import CardDetailHeaderContainer from './Header.container.js';

require('./_styles.scss');

function getStyles(position) {
    return {
        right: `${position * 354}px`,
    };
}

const CardDetail = ({ card, position }) => (
    <div className="CardDetail" style={getStyles(position)}>
        <CardDetailHeaderContainer card={card} />
        <CardDetailSummary card={card} />
        <CardDetailStats card={card} />
    </div>
);


CardDetail.propTypes = {
    position: PropTypes.number.isRequired,
    card: PropTypes.object.isRequired,
};

export default CardDetail;
