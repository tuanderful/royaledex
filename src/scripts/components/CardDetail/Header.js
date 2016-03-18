import React, { PropTypes } from 'react';

import Close from '../Core/Close';

const styles = {
    float: 'right',
};

const CardDetailHeader = ({ card }) => (
    <div className="Header">
        header {card.name}
        <Close styles={styles} />
    </div>
);


CardDetailHeader.propTypes = {
    card: PropTypes.object.isRequired,
};

export default CardDetailHeader;
