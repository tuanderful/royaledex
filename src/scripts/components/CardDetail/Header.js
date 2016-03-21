import React, { PropTypes } from 'react';

import Close from '../Core/Close';

const CardDetailHeader = ({ card, onClose }) => (
    <div className="Header">
        <h3>{card.name}</h3>
        <Close
          onClick={function _handleClick() {
              onClose(card.id);
          }}
        />
    </div>
);


CardDetailHeader.propTypes = {
    card: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CardDetailHeader;
