import React from 'react';
import PropTypes from 'prop-types';
import { EventPageTemplate } from '../../templates/event-page';

const EventPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <EventPageTemplate
                image={getAsset(data.image)}
                title={data.title}
                heading={data.heading}
                inner_image={data.inner_image}
            />
        );
    }
    return <div>Loading...</div>;
};

EventPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default EventPagePreview;
