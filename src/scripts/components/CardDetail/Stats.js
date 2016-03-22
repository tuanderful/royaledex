import React, { PropTypes } from 'react';
import Stat from './Stat';

const STATS_TO_IGNORE = ['id', 'stats', 'text', 'name', 'rarity', 'type', 'cost', '_level'];

const CardDetailStats = ({ card }) => (
    <div className="Stats">
        {Object.keys(card)
            // filter out the stats to ignore
            .filter((k) => (!STATS_TO_IGNORE.includes(k)))
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
