import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ContactGrid = ({ gridItems }) => (
    <div className="columns is-multiline">
        {gridItems.map((item, index) => (
            <div key={item.title} className="squares column is-4">
                <section
                    className="section"
                    style={{
                        padding: '0 0 20px 0',
                    }}
                >
                    <PreviewCompatibleImage imageInfo={item.icon} />
                    <p
                        className="has-text-centered"
                        style={{
                            padding: '20px 30px',
                        }}
                    >{item.details}</p>
                </section>
            </div>
        ))}
    </div>
);

ContactGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
};

export default ContactGrid;
