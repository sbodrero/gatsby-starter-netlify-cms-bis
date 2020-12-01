import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
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
          <p
              className="has-text-centered"
              style={{
                  color: 'white',
                  paddingLeft: '10px',
                  paddingRight: '10px',
              }}
          >{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
