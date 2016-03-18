import React, { PropTypes } from 'react';
import CONST from '../CONST';

require('./CardThumbnail.scss');

const CardThumbnail = ({ onClick, selected, id }) => (
    <li onClick={onClick}
      className={selected ? 'CardThumbnail selected' : 'CardThumbnail'}
    >
        <img src={require(`../../images/cards/230/${id}.png`)} width={CONST.THUMB_WIDTH / 2} />
        <div className="glow"></div>
    </li>
);


CardThumbnail.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    id: PropTypes.string.isRequired,
};

export default CardThumbnail;
