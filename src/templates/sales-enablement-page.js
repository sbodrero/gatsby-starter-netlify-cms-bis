import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const SalesEnablementPageTemplate = ({
                                                   image,
                                                   title,
                                                   subheading,
                                                   button,
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
                                    <h2 className="title has-text-white-ter has-text-centered">
                                        Qu’est ce que le Sales enablement?
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
                                <p>
                                    Le Sales Enablement n’est pas seulement de la vente, il s’agit de mélanger coaching,
                                    outils, technologies et contenus pour aider les équipes commerciales et marketing à
                                    être plus efficaces et performantes.
                                </p>
                                <p>
                                    Se fixer les mêmes objectifs et travailler en collaboration pour atteindre les
                                    objectifs définis. Le Sales Enablement permet aux équipes de vente et marketing de
                                    parler le même langage et d’utiliser les mêmes outils et données.
                                </p>
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
        <section className="section section--gradient grey-bg p-0">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <div className="tile">
                                    <h2 className="title has-text-white-ter has-text-centered">
                                        Alignez vos équipes Sales et Marketing vers le même objectif
                                    </h2>
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
                                    <h2 className="title has-text-white-ter has-text-centered">
                                        Notre approche
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
                        <div className="column is-one-fifth">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 1 : Organisation de votre CRM </th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Formation au CRM Hubspot<br/>
                                        Aperçu de l’activité commerciale <br/>
                                        Prévision des ventes
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 2 : Automatiser les processus sales </th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Créer des rapports<br/>
                                        Analyse de votre tunnel de conversion <br/>
                                        Organiser le suivi des prospects
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 3 : Alignement Sales et Marketing</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Configurer le pipeline <br/>
                                        MQL et SQL <br/>
                                        Lead <br/>
                                        Cycle de vie du buyer persona
                                    </td>
                                </tr>
                                </tbody>
                            </table>
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
                                    <h2 className="title has-text-white-ter has-text-centered">
                                        Pourquoi mettre en place une stratégie Sales Enablement dans mon entreprise?
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
                                <ul> Mettre en place du Sales Enablement vous offre de nombreux avantages :
                                    <li>Alignement des services Sales et Marketing: les équipes avancent dans la même
                                        direction vers un objectif commun.</li>
                                    <li>Démocratiser l’organisation: c’est un travail d’équipe.</li>
                                    <li>Activation des ventes: les objectifs seront plus facilement atteints.</li>
                                </ul>
                                <p>Cette méthode s’applique à toutes les équipes commerciales, quelle que soit la
                                    taille. C’est un processus évolutif car les besoins des acheteurs évoluent sans
                                    cesse.</p>
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
                                    <h2 className="title has-text-white-ter has-text-centered">
                                        Le content marketing, un outil indispensable dans une stratégie de Sales
                                        enablement.
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
                                <p>Le content marketing (articles rédigés par l’équipe marketing) permet à l’équipe
                                    commerciale d’activerplus facilement le processus de vente.
                                </p>
                                <p>
                                    Pour cela, les contenus sont découpés en 3 étapes: TOFU (top of the funnel), MOFU
                                    (middle of the funnel) et BOFU (bottom of the funnel). Leurs objectifs est de
                                    guider le client dans chaque phase du tunnel de conversion en répondant à chacun de
                                    ses besoins.
                                </p>
                                Bouton vers content marketing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


const SalesEnablementPage = ({data}) => {
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
            <SalesEnablementPageTemplate
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

SalesEnablementPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default SalesEnablementPage;

export const pageQuery = graphql`
    query SalesEnablementPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "sales-enablement-page" } }) {
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
