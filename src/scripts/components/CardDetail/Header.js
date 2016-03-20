import React, { PropTypes } from 'react';

import Close from '../Core/Close';

const styles = {
    float: 'right',
};

const CardDetailHeader = ({ card, onClose }) => (
    <div className="Header">
        header {card.name}
        <Close styles={styles}
          onClick={function _handleClick() {
              onClose(card.id);
          }}
        />
    </div>
);


CardDetailHeader.propTypes = {
    card: PropTypes.object.isRequired,
};

export default CardDetailHeader;
