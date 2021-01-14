import React from 'react';
import PropTypes from 'prop-types';
import { SalesEnablementPageTemplate } from '../../templates/sales-enablement-page';

const SalesEnablementPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <SalesEnablementPageTemplate
                image={getAsset(data.image)}
                title={data.title}
                heading={data.heading}
                inner_image={data.inner_image}
            />
        );
    }
    return <div>Loading...</div>;
};

SalesEnablementPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default SalesEnablementPagePreview;
