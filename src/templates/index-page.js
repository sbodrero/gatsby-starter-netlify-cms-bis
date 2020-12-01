import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import Certifications from '../components/Certifications';
import ValuesGrid from '../components/Values';
import WhitenessesGrid from '../components/WhitnessesGrid';
import ContactGrid from '../components/ContactGrid';

export const IndexPageTemplate = ({
          image,
          title,
          subheading,
          button,
          blocs: { carre },
          main : { littleTitle, bigTitle, description, chiffre: { number, details } },
          certifications,
          values,
          whitnesses,
          contacts,
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
                                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-white-ter"
                                style={{
                                    lineHeight: '1',
                                    padding: '0.25em',
                                }}
                            >
                                {title}
                            </h1>
                            <h3
                                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-white-ter"
                                style={{
                                    lineHeight: '1',
                                    padding: '0.25em',
                                }}
                            >
                                {subheading}
                            </h3>
                            <div className="column has-text-centered">
                                <Link className="btn" to="/products">{button}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="section section--gradient grey-bg p-0">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-8-desktop">
                            <div className="content">
                                    <div className="tile">
                                        <h2
                                            className="title has-text-white-ter"
                                        >{littleTitle}</h2>
                                    </div>
                                    <div
                                        className="tile"
                                        style={{ textTransform: 'uppercase'}}
                                    >
                                        <h3 className="subtitle">{bigTitle}</h3>
                                    </div>
                                <p
                                    style={{ color: 'white'}}
                                >{description}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <h2
                                    className="title has-text-centered"
                                    style={{
                                        fontSize: '60px',
                                        fontWeight: 'bolder',
                                    }}
                                >
                                    {number}
                                </h2>
                                <h2
                                    className="subtitle has-text-centered is-uppercase"
                                    style={{
                                        fontSize: '60px',
                                        fontWeight: 'bolder',
                                    }}
                                >
                                    {details}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section--gradient squares">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <Features gridItems={carre}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section--gradient grey-bg certifications">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <h2
                                    style={{ textTransform: 'uppercase', paddingBottom: '20px'}}
                                >
                                    Nos certifications
                                </h2>
                                <Certifications gridItems={certifications}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section--gradient values">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <h2 className="has-text-centered is-uppercase"
                                    style={{ paddingBottom: '20px'}}
                                >
                                    Les valeurs de pcr communication
                                </h2>
                                <ValuesGrid gridItems={values}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section--gradient grey-bg whitnesses">
            <div className="container">
                <div className="content">
                    <WhitenessesGrid gridItems={whitnesses}/>
                </div>
            </div>
        </section>
        <section className="section section--gradient values">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <h2 className="has-text-centered is-uppercase"
                                    style={{ paddingBottom: '20px'}}
                                >
                                    Contactez-nous
                                </h2>
                                <ContactGrid gridItems={contacts}/>
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
    blocs: PropTypes.shape({
        carre: PropTypes.array,
    }),
};

const IndexPage = ({data}) => {
    const {
        frontmatter : {
            image,
            title,
            heading,
            subheading,
            button,
            main,
            blocs,
            certifications,
            values,
            whitnesses,
            contacts,
        }
    } = data.markdownRemark;
    console.log(contacts);

    return (
        <Layout>
            <IndexPageTemplate
                image={image}
                title={title}
                heading={heading}
                subheading={subheading}
                button={button}
                main={main}
                blocs={blocs}
                certifications={certifications}
                values={values}
                whitnesses={whitnesses}
                contacts={contacts}
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
            blocs {
                carre {
                    text
                    image {
                        childImageSharp {
                            fluid(maxWidth: 340, quality: 64) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
            certifications {
                image {
                    childImageSharp {
                        fluid(maxWidth: 200, quality: 64) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            main {
                littleTitle
                bigTitle
                description
                chiffre {
                    number
                    details
                }
            }
            values {
                title
            }
            whitnesses {
                name
                text
            }
            contacts {
                icon {
                    childImageSharp {
                        fluid(maxWidth: 100, quality: 64) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
                details
            }
        }
    }
  }
`;
