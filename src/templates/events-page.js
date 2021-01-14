import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';

export const EventPageTemplate = ({
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
                                        Comment organiser un événement ?
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
                                    Organiser un événement peut être à la fois amusant et intéressant. En revanche, il
                                    peut être parfois un véritable cauchemar avec une lourde organisation.
                                </p>
                                <h3>
                                    Quel est le secret d’un événement réussi ?
                                </h3>
                                <ul>
                                    <li>Définir des objectifs clair : pourquoi organiser un événement ?</li>
                                    <li>
                                        Définir la cible : interne ou externe ? Qu’est ce que j’attend de mes invités ?
                                    </li>
                                    <li>
                                        Déterminer le budget en définissant tout les lots : invitations, types
                                        d’événements, hôtesses, sonorisation, audiovisuel, animation, location de salle,
                                        etc.
                                    </li>
                                    <li>
                                        Programmer le lieu et la date
                                    </li>
                                    <li>
                                        Proposer un coin gastronomique : cocktail dînatoire, traiteurs...
                                    </li>
                                    <li>
                                        Mettre en place une communication événementielle
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
                                        Surprenez votre cible avec vos événements
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
                                    <strong>Evénements internes :</strong> améliorez votre cohésion d’équipe, délivrer
                                    un message avec des
                                    activités : <strong>teambuilding,séminaire</strong>, soirée, fête du personnel, etc.
                                    Rendez votre
                                    événement unique, créatif et original.<strong>L’événement</strong> d’entreprise est
                                    un outil qui
                                    s’inscrit dans la <strong>stratégie</strong> de <strong>communication</strong>. Qui
                                    mieux que vos salariés peuvent parler
                                    de vous ?
                                </p>
                                <p>
                                   <strong>Evénements externes</strong> :vous souhaitez faire un lancement de produit,
                                    des portes
                                    ouvertes, une inauguration, etc ? <br/>Notre <strong>agence événementiel</strong>
                                    vous conseille et vous
                                    accompagne dans toutes les démarches pour rendre votre événement unique.
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
                                        Faites de votre événement un véritable succès
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
                                    <li>Salons professionnels</li>
                                    <li>Portes ouvertes</li>
                                    <li>Inauguration</li>
                                    <li>Team bulding</li>
                                    <li>Soirées entreprise</li>
                                    <li>Séminaires</li>
                                    <li>Street Marketing</li>
                                    <li>Vœux entreprise institution</li>
                                    <li>Etc</li>
                                </ul>
                                <p>
                                    Nous avons mis également en place des nouvelle activités adaptées au contexte
                                    actuel. En ce qui concerne les rassemblements, il vous sera fourni des masques et
                                    gel hydroalcoolique afin d’assurer votre sécurité.
                                </p>
                                <div className="column has-text-centered">
                                    <Link className="btn" to={button.url}>Créer votre évènement</Link>
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
                                        Pourquoi créer un évènement ?
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
                                    <li><strong>Moderniser</strong> votre image d’entreprise</li>
                                    <li>
                                        Développer votre <strong>business</strong> : faites la promotion de vos produits
                                    </li>
                                    <li>Créer une <strong>relation</strong> avec vos clients et prospects B2B ou B2C: la
                                        relation client est un pilier trèsimportant. Être proche de sa cible permet
                                        d’instaurer un <strong>climat de confiance</strong></li>
                                    <li><strong>Élargir</strong> sa cible</li>
                                    <li>
                                        <strong>Fidéliser</strong> les clients avec des <strong>événementsprivés,VIP
                                        </strong>
                                    </li>
                                    <li><strong>Elargir son réseau</strong></li>
                                    <li>Enrichir sa <strong>communication</strong></li>
                                    <li>Célébrer des événements importants de l’entreprise</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


const EventPage = ({data}) => {
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
            <EventPageTemplate
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

EventPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default EventPage;

export const pageQuery = graphql`
    query EventPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "events-page" } }) {
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
