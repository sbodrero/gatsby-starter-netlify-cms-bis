import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ContactGrid = ({ gridItems }) => (
    <div className="columns is-multiline">
        {gridItems.map((item, index) => (
            <div key={item.title} className="squares column is-4">
                <section
                    className="section has-text-centered is-centered"
                    style={{
                        padding: '0 0 20px 0',
                    }}
                >
                    <div className="contact-icon">
                        <PreviewCompatibleImage imageInfo={item.icon} />
                    </div>
                    <h3 className="has-text-centered mt-0 mb-1 contact-title">{item.title}</h3>
                    <p className="has-text-justified">{item.details}</p>
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
