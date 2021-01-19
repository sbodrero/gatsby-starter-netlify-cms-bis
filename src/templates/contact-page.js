import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';

function encode(data) {
    return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
}

export const ContactPageTemplate = ({
                                        image,
                                        title,
                                        subheading,
                                        button,
                                        inner_image,
                                    }) => {
    const [thanks, setThanks] = useState(false);

    const fields = {};

    const handleChange = (e) => {
        fields[e.target.name] = e.target.value;
        console.log(fields, 'fields');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
                'form-name': form.getAttribute('name'),
                ...fields
            }),
        })
            .then(() => setThanks(true))
            .catch((error) => alert(error));
    }

    const renderFromOrMessage = () => {
        if (thanks) {
            return (
                <p className="title has-text-centered">
                    Message envoyé avec succès
                </p>
            )
        }
        return (
            <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="botfield"
                onSubmit={handleSubmit}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact"/>
                <div hidden>
                    <label>
                        Don’t fill this out:
                        {' '}
                        <input name="botfield" onChange={(e) => handleChange(e)}/>
                    </label>
                </div>
                <div className="field">
                    <label className="label" htmlFor="name">
                        Nom
                    </label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="name"
                            onChange={(e) => handleChange(e)}
                            id="name"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">
                        E-mail
                    </label>
                    <div className="control">
                        <input
                            className="input"
                            type="email"
                            name="email"
                            onChange={(e) => handleChange(e)}
                            id="email"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="message">
                        Message
                    </label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            name="message"
                            onChange={(e) => handleChange(e)}
                            id="message"
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link" type="submit">
                        Envoyer
                    </button>
                </div>
            </form>
        )
    }
    return (
        <div>
            <div
                className="full-width-image margin-top-0"
                style={{
                    backgroundImage: `url(${
                        image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                }}
            >
                <div className="container">
                    <div className="section main-heading">
                        <div className="column is-6 is-offset-1 has-text-centered">
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
                                    <Link className="btn" to={button.url}>{button.text}</Link>
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
                            <div className="column">
                                <div className="content">
                                    <div className="tile">
                                        <h2 className="title has-text-white-ter has-text-centered">
                                            Une question ?
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--gradient p-0">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column">
                                <div className="content">
                                    {renderFromOrMessage()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};


const ContactPage = ({data}) => {
    const {
        frontmatter: {
            image,
            title,
            heading,
            subheading,
            button,
            inner_image,
        }
    } = data.markdownRemark;
    return (
        <Layout>
            <ContactPageTemplate
                image={image}
                title={title}
                heading={heading}
                subheading={subheading}
                button={button}
                inner_image={inner_image}
            />
        </Layout>
    );
};

ContactPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ContactPage;

export const pageQuery = graphql`
    query ContactPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
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
                inner_image {
                    childImageSharp {
                        fluid(maxWidth: 400, quality: 64) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                button {
                    text
                    url
                }
            }
        }
    }
`;
