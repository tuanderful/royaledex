import React, { PropTypes } from 'react';
import CONST from '../CONST';


function getStyles(selected, id) {
    const imageURL = require(`../../images/cards/230/${id}.png`);
    const width = CONST.THUMB_WIDTH / 2;
    const height = CONST.THUMB_HEIGHT / 2;
    return {
        color: selected ? 'red' : 'blue',
        background: `url('${imageURL}')`,
        backgroundSize: `${width}px ${height}px`,
        width: `${width}px`,
        height: `${height}px`,
        float: 'left',
        marginRight: `${CONST.THUMB_MARGIN}px`,
        marginBottom: '10px',
    };
}


const CardThumbnail = ({ onClick, selected, name, id }) => (
    <li onClick={onClick}
      style={getStyles(selected, id)}
    >
        {name}
    </li>
);


CardThumbnail.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default CardThumbnail;
