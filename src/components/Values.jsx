import React from 'react';
import PropTypes from 'prop-types';

const ValuesGrid = ({ gridItems }) => (
    <div className="columns is-multiline">
        {gridItems.map((item, index) => (
            <div key={item.text} className="squares column is-4">
                <section
                    className="section"
                    style={{
                        background: index%2 === 0 ?  '#4D5A5B' : '#3E94F1',
                        padding: '0 0 20px 0',
                    }}
                >
                    <p
                        className="has-text-centered"
                        style={{
                            color: 'white',
                            padding: '20px 30px',
                        }}
                    >{item.title}</p>
                </section>
            </div>
        ))}
    </div>
);

ValuesGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
};

export default ValuesGrid;
