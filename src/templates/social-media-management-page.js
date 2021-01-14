import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const SmmPageTemplate = ({
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
                                        Qu’est ce qu’un média social ?
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
                                    Les médias sociaux désignent l’ensemble des sites et plateformes web qui proposent
                                    des fonctionnalitéssociales : création de contenus, échanges d’information
                                    (commentaires), partage de contenus (texte, photo, vidéo...), chat.
                                </p>
                                <p>
                                    Les réseaux sociaux constituent à ce jour un canal de communication incontournable.
                                    Pour se développer et toucher ses cibles , l’entreprise doit mettre en place une
                                    stratégie de présence efficace.
                                </p>
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
                                        A chaque entreprise sa stratégie...
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
                                    La création ou l’optimisation d’une stratégie social média est essentielle pour
                                    donner plus de visibilité àvotre activité, échanger et fidéliser avec votre cible .
                                </p>
                                <p>
                                    Que vous soyez industriel, institutionnel, commerçants, e-commerçants, sociétés de
                                    services, ou d’un autre secteur d’activité votre stratégie social média doit être
                                    sur mesure et doit donc respecter les attentes et besoins de vos cibles.
                                </p>
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
                                        Pourquoi faire une stratégie social média ?
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
                                <ul>
                                    <li>
                                        Développer de votre notoriété,
                                    </li>
                                    <li>
                                        Gagner en visibilité
                                    </li>
                                    <li>
                                        Améliorer son référencement naturel (SEO)
                                    </li>
                                    <li>
                                        Conquérir de nouveaux clients : un outil pour la prospection commerciale et la fidélisation de vos clients
                                    </li>
                                    <li>
                                        Communiquer à large échelle
                                    </li>
                                    <li>
                                        Communication efficace
                                    </li>
                                    <li>
                                        Générer plus de leads
                                    </li>
                                </ul>
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
                                        Les enjeux d’une bonne stratégie
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
                                <ul>
                                    <li>
                                        Moderniser votre entreprise : cette utilisation vous donne une image de marque
                                        moderne, proche de vos clients actuels ou potentiels.
                                    </li>
                                    <li>
                                        Développer votre business : faites la promotion de vos produits via ses
                                        plateformes pour augmenter votre visibilité
                                    </li>
                                    <li>
                                        Créer une relation avec vos clients et prospects B2B ou B2C : la relation client
                                        est un pilier très important. Être proche de sa cible permet d’instaurer un
                                        climat de confiance
                                    </li>
                                    <li>
                                        Élargir sa cible
                                    </li>
                                    <li>
                                        Gérer l’e-réputation : vous pourrez écouter, collecter, analyser les
                                        informations liés à vos clients/prospects
                                    </li>
                                    <li>
                                        Augmenter le trafic sur votre site Internet
                                    </li>
                                    <li>
                                        Utiliser le storystelling pour créer un univers autour de l’entreprise
                                    </li>
                                    <li>
                                        Observer la concurrence
                                    </li>
                                </ul>
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
                        <div className="column is-one-third ">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 1 : Stratégie </th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Audit de votre présence sur les réseaux sociaux<br/>
                                        Définition de votre audience cible (buyer persona) <br/>
                                        Benchmark de vos concurrents <br/>
                                        Définition des objectifs <br/>
                                        Détermination ligne éditoriale
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-third has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 2 : Plan d’action </th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Choix des réseaux sociaux suivant la stratégie<br/>
                                        Accompagnement pour votre community management ou priseen charge des
                                        publications<br/>
                                        Création de visuels et contenus
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-third has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 3 : Reporting</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Veille opérationnelle <br/>
                                        Reporting sur visibilité et performances <br/>
                                        Recommandations
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


const SmmPage = ({data}) => {
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
            <SmmPageTemplate
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

SmmPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default SmmPage;

export const pageQuery = graphql`
    query SmmPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "social-media-management-page" } }) {
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
