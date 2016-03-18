import React, { PropTypes } from 'react';
import Stat from './Stat';


const CardDetailStats = ({ card }) => (
    <div className="Stats">
        {Object.keys(card).filter((k) => (['id', 'stats', 'text'].indexOf(k) === -1))
            .map((k, index) => (
                <Stat card={card} key={index} statKey={k} />
            )
        )}
    </div>
);


CardDetailStats.propTypes = {
    card: PropTypes.object.isRequired,
};

export default CardDetailStats;
