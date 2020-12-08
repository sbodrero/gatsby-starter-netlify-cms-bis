import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AmbPageTemplate = ({
    image,
    title,
    subheading,
    inner_image,
}) => (
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
                                    <h2 className="title has-text-white-ter">
                                        Qu’est que l’Account Based Marketing (ABM)?
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
                                <div className="tile">
                                    <p>
                                        <srong>L’Account Based Marketing</srong>
                                        (ou «marketing des comptes stratégiques») consiste à mettre en place
                                        des campagnes de marketing digitale B2B focalisées sur un nombre restreint de
                                        prospects à forte valeurajoutée (grands comptes).
                                    </p>
                                    <p>
                                        Cette approche très ciblée, permet d'élaborer des campagnes personnalisées
                                        avec des entreprises susceptibles de se convertir en acheteurs.
                                    </p>
                                    <ul> Certaines pratiques de l’ABM sont cependant innovantes, en l’occurrence :
                                        <li>
                                            Des articles de blog et du marketing de contenus pour attirer les
                                            personas en phase de prospection (ciblage seo)
                                        </li>
                                        <li>
                                            Une expérience client / utilisateur on-site ultra-personnalisée
                                        </li>
                                        <li>
                                            Des stratégies réseaux sociaux et du social selling
                                        </li>
                                        <li>
                                            CRM et marketing automation pour faciliter la communication et la
                                            collaboration des équipes de ventes et de marketing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section--gradient grey-bg p-0">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <div className="tile">
                                    <h2 className="title has-text-white-ter">
                                        Quel est la différence entre Inbound Marketing et ABM?
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
                                <div className="tile">
                                    <ul> L'inbound marketing et l'account-based marketing sont au premier abord quelque
                                        peu différents :
                                        <li>
                                            L'<strong>inbound marketing</strong> a pour objectif de créer du contenu de qualité pour
                                            attirer des prospects qualifiés.
                                        </li>
                                        <li>
                                            L'<strong>accound-based marketing</strong>, lui, met l'accent sur les prospects ou comptes
                                            existants de manière individuelle.
                                        </li>
                                    </ul>
                                    <p>
                                        Toutefois, ces deux approches se complètent parfaitement, si bien qu'elles s
                                        ont souvent utilisées en parallèle. En effet, si vous appliquez ces deux
                                        principes, votre équipe commerciale dispose d’une liste des comptes cibles (ABM)
                                        et attire de nouveaux leads (Inbound Marketing) pour la compléter
                                    </p>
                                    <p>
                                        De nos jours, les clients n’apprécient plus les méthodes de vente qu'ils jugent
                                        trop directes. C'est pourquoi il est essentiel que votre marketing
                                        (account-based marketing inclus) propose une réelle valeur ajoutée et ne pousse
                                        pas le produit vers le consommateur.
                                    </p>
                                    <p>
                                        Les techniques de personnalisation des campagnes marketing sont donc
                                        essentielles pour donner envie au client de vous connaître et de découvrir votre
                                        produit/service.
                                    </p>
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
                                <PreviewCompatibleImage imageInfo={inner_image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


const AmbPage = ({data}) => {
    const {
        frontmatter: {
            image,
            title,
            heading,
            subheading,
            inner_image,
        }
    } = data.markdownRemark;
    return (
        <Layout>
            <AmbPageTemplate
                image={image}
                title={title}
                heading={heading}
                subheading={subheading}
                inner_image={inner_image}
            />
        </Layout>
    );
};

AmbPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default AmbPage;

export const pageQuery = graphql`
    query AmbPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "amb-page" } }) {
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
            }
        }
    }
`;
