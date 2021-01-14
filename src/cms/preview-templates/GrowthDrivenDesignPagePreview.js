import React from 'react';
import PropTypes from 'prop-types';
import { GrowthDrivenDesignPageTemplate } from '../../templates/growth-driven-design-page';

const GrowthDrivenDesignPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <GrowthDrivenDesignPageTemplate
                image={getAsset(data.image)}
                title={data.title}
                heading={data.heading}
                inner_image={data.inner_image}
            />
        );
    }
    return <div>Loading...</div>;
};

GrowthDrivenDesignPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default GrowthDrivenDesignPagePreview;
