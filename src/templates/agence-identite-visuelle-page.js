import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AgenceIdentiteVisuellePageTemplate = ({
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
                                        Pourquoi créer une identité visuelle ?
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
                                    <strong>L’identité visuelle</strong> est le premier contact avec l’entreprise et ses
                                    clients. Elle met en avant son <strong>histoire</strong>,ses valeurs, ses <strong>
                                    produits</strong> et services, ses partenaires etc, afin
                                    de créer un climat de <strong>confiance et exprimer votre positionnement</strong> en
                                    un seul regard.
                                    L’objectif est de <strong>marquer les esprits</strong> par des créations graphiques
                                    réfléchies,
                                    originales et pensées pour votre cible.
                                </p>
                                <p>
                                    A l’ère du digital il est donc indispensable de se démarquer grâce à une <strong>
                                    identité professionnelle</strong>, dynamique et de la décliner dans tous les
                                    supports de communication : print, vidéo, site Internet, réseaux sociaux, etc. La
                                    cible doit pouvoir s’identiffier partout.Pour cela, chaque projet est étudié par
                                    notre équipe afin de déterminer les <strong>axes stratégiques</strong> à travailler.
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
                                        Quels sont nos services?
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
                                    <li>Identité de marque</li>
                                    <li>Stratégie de marque</li>
                                    <li>Charte graphique</li>
                                    <li>Logos</li>
                                    <li>Sites web et applications</li>
                                    <li>Profils réseaux sociaux</li>
                                    <li>Contenu Corporate</li>
                                    <li>Masques Powerpoint/Keynote</li>
                                    <li>Contenu pour des événements</li>
                                    <li>Contenu publicitaires: print & digital</li>
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
                                        Les enjeux d'une bonne communication visuelle à l'ère du digital
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
                                <ul><strong>La communication print</strong> reste un canal de diffusion très important
                                    et complémentaire avec <strong>la communicaton Web</strong>. Elle offre de nombreux
                                    avantages :
                                    <li>Créer une <strong>identité de marque</strong> pertinente, une charte graphique
                                        ou renforcer son image</li>
                                    <li>Faire passer un message clair, concis et compréhensible</li>
                                    <li>Renvoyer une <strong>image positive et professionnelle</strong> de l’entreprise
                                    </li>
                                    <li>Faciliter la compréhension grâce aux visuels</li>
                                    <li><strong>Attirer</strong> des clients et prospects</li>
                                    <li>Pérenniser l’image de l’entreprise</li>
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
                                        Notre démarche
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
                                <tr><th>Etape 1 : Étude </th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Étude de votre brief créatif:<br/>
                                        objectifs, attentes, charte, etc<br/>
                                        Audit d’image et benchmark devos concurrents
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 2 : Conception </th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Réflexion stratégique en fonction de votre image de marque <br/>
                                        Création de pistes créatives et de la charte graphique
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 3 : Validation</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Modification et validation <br/>
                                        Déclinaison de la création validée sur les différents supports: carte de visite,
                                        plaquette, papier en-tête etc.
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


const AgenceIdentiteVisuellePage = ({data}) => {
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
            <AgenceIdentiteVisuellePageTemplate
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

AgenceIdentiteVisuellePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default AgenceIdentiteVisuellePage;

export const pageQuery = graphql`
    query AgenceIdentiteVisuellePageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "agence-identite-visuelle-page" } }) {
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
