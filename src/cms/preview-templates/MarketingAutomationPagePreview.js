import React from 'react';
import PropTypes from 'prop-types';
import { MarketingAutomationPageTemplate } from '../../templates/marketing-automation-page';

const MarketingAutomationPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <MarketingAutomationPageTemplate
                image={getAsset(data.image)}
                title={data.title}
                heading={data.heading}
                inner_image={data.inner_image}
            />
        );
    }
    return <div>Loading...</div>;
};

MarketingAutomationPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default MarketingAutomationPagePreview;
