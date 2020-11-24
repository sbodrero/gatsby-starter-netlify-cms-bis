import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({
          image,
          title,
          heading,
          subheading,
          button,
          intro,
          main : { littleTitle, bigTitle, description, chiffre: { number, details } }
      }) => (
    <div>
        <div
            className="full-width-image margin-top-0"
            style={{
                backgroundImage: `url(${
                    image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                backgroundPosition: 'bottom center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div class="container">
                <div className="section main-heading">
                    <div className="column is-6 has-text-centered">
                        <div
                            style={{
                                display: 'flex',
                                height: '150px',
                                lineHeight: '1',
                                justifyContent: 'space-around',
                                alignItems: 'left',
                                flexDirection: 'column',
                            }}
                        >
                            <h1
                                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                                style={{
                                    color: 'white',
                                    lineHeight: '1',
                                    padding: '0.25em',
                                }}
                            >
                                {title}
                            </h1>
                            <h3
                                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                                style={{
                                    color: 'white',
                                    lineHeight: '1',
                                    padding: '0.25em',
                                }}
                            >
                                {subheading}
                            </h3>
                            <div class="column has-text-centered">
                                <Link className="btn" to="/products">{button}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="section section--gradient brown-bg p-0">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-8-desktop is-offset-1">
                            <div className="content">
                                    <div className="tile">
                                        <h2 className="title">{littleTitle}</h2>
                                    </div>
                                    <div className="tile">
                                        <h3 className="subtitle">{bigTitle}</h3>
                                    </div>
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <h1 className="title">
                                    {number}
                                </h1>
                                <h2 className="subtitle">
                                    {details}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <Features gridItems={intro.blurbs}/>
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        Latest stories
                                    </h3>
                                    <BlogRoll/>
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
};

const IndexPage = ({data}) => {
    const {frontmatter : { image, title, heading, subheading, description, intro, button, main }} = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={image}
                title={title}
                heading={heading}
                subheading={subheading}
                intro={intro}
                button={button}
                main={main}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            subheading
            button
            main {
                littleTitle
                bigTitle
                description
                chiffre {
                    number
                    details
                }
            }
            intro {
              blurbs {
                image {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                text
              }
              heading
              description
            }
        }
    }
  }
`;
