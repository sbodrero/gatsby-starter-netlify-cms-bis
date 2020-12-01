import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Certifications = ({ gridItems }) => (
    <div className="columns is-multiline">
        {gridItems.map((item, index) => (
            <div key={item.text} className="squares column is-size-3-tablet is-size-3-widescreen">
                <section className="section">
                    <div className="has-text-centered">
                        <div
                            style={{
                                width: '100%',
                                display: 'inline-block',
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={item} />
                        </div>
                    </div>
                </section>
            </div>
        ))}
    </div>
);

Certifications.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
};

export default Certifications;
