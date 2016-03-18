import React, { PropTypes } from 'react';

import CardDetailSummary from './Summary';
import CardDetailStats from './Stats';
import CardDetailHeader from './Header';

require('./_styles.scss');

const CardDetail = ({ card }) => (
    <div className="CardDetail">
        <CardDetailHeader card={card} />
        <CardDetailSummary card={card} />
        <CardDetailStats card={card} />
    </div>
);


CardDetail.propTypes = {
    card: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CardDetail;
