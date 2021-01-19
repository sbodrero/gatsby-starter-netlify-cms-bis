import React from 'react';
import PropTypes from 'prop-types';
import { AgenceIdentiteVisuellePageTemplate } from '../../templates/agence-identite-visuelle-page';

const AgenceIdentiteVisuellePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <AgenceIdentiteVisuellePageTemplate
                image={getAsset(data.image)}
                title={data.title}
                heading={data.heading}
                inner_image={data.inner_image}
            />
        );
    }
    return <div>Loading...</div>;
};

AgenceIdentiteVisuellePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default AgenceIdentiteVisuellePreview;
