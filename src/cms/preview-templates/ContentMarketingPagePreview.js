import React from 'react';
import PropTypes from 'prop-types';
import { ContentMarketingPageTemplate } from '../../templates/content-marketing-page';

const ContentMarketingPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <ContentMarketingPageTemplate
                image={getAsset(data.image)}
                title={data.title}
                heading={data.heading}
                inner_image={data.inner_image}
            />
        );
    }
    return <div>Loading...</div>;
};

ContentMarketingPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ContentMarketingPagePreview;
