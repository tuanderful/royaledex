import React, { PropTypes } from 'react';

import CardDetailSummary from './Summary';
import CardDetailStats from './Stats';
import CardDetailHeaderContainer from './Header.container.js';

require('./_styles.scss');

const CardDetail = ({ card }) => (
    <div className="CardDetail">
        <CardDetailHeaderContainer card={card} />
        <CardDetailSummary card={card} />
        <CardDetailStats card={card} />
    </div>
);


CardDetail.propTypes = {
    card: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CardDetail;
