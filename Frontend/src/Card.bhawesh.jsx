import PropTypes from 'prop-types';

export const CardBhawesh = ({ item }) => {
    return (
        <div className="card-b-1">
            <div>
                <img src={item.img} alt={item.name} />
            </div>
            <h5>{item.info}</h5>
            <p>{item.name}</p>
        </div>
    );
};

CardBhawesh.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
    }).isRequired,
};