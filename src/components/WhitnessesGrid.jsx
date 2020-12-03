import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const innerWidth = typeof window !== 'undefined' && window.innerWidth ? window.innerWidth : 768
const slidesPerView = innerWidth < 768 ? 1 : 3

const WhitenessesGrid = ({ gridItems }) => (
    <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        autoplay
        className="swiper-height"
    >
        {gridItems.map((item, index) => (
            <SwiperSlide key={index}>
                <h3
                    className="has-text-centered has-text-white-ter"
                    style={{
                        padding: '20px 30px',
                    }}
                >{item.name}</h3>
                <p className="has-text-white-ter">{item.text}</p>
            </SwiperSlide>
        ))}
    </Swiper>
);

WhitenessesGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
};

export default WhitenessesGrid;
