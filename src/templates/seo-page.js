import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const SeoPageTemplate = ({
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
                                        Qu’est ce que le référencement naturel?
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
                                    Le référencement naturel ou SEO (search engine optimization) est un ensemble de
                                    techniques qui visent à positionner les pages d’un site Internet sur les moteurs de
                                    recherche de façon naturelle.
                                </p>
                                <p>
                                    Pour arriver à cet objectif il est impératif de remplir les règles des moteurs de
                                    recherches (notamment Google).
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
                                        Pourquoi le référencement naturel est si important?
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
                                    Google indexe des milliards de sites Internet dans le monde. Vous devez donc être
                                    meilleur que les autres en terme de référencement pour apparaître dans les premières
                                    positions.Quand un internaute lance une recherche sur le moteur de recherche, la
                                    seule façon de rendre son site Internet et ses pages visibles sont de les optimiser
                                    en respectant ses règles (SEO On Site et SEO Off Site).
                                </p>
                                <p>
                                    Vous pouvez avoir le plus beau site du monde, mais sans référencement de votre site
                                    Internet, il est possible qu’il reste invisible pour les internautes.
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
                                        Pourquoi le référencement Google est il un fort levier d’acquisition de trafic?
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
                                <p>Le référencement naturel SEO permet d’être visible sur les moteurs de recherche selon
                                    des mots clés définis et donc d’attirer vers vos pages web un trafic qualifié,
                                    susceptible de se convertir en prospects, puis en clients.
                                </p>
                                <p>
                                    Ce trafic généré par le référencement SEO Google est pérenne sur le long terme,
                                    contrairement à une campagne publicitaire qui s’arrete dès lors que vous cessez de
                                    payer. Le SEO quant à lui, continue d’attirer du trafic même même lorsque vous ne
                                    l’optimisez plus régulièrement.
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
                                        Qu’est ce que le référencement naturel SEO On site?
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
                                <h3>Le référencement naturel on-site regroupe tous les éléments qui composent une page web :</h3>
                                <ul>
                                    <li>Les balises html (title, meta description, balises Hn,...)</li>
                                    <li>Les rich snippets</li>
                                    <li>La structure des URLs</li>
                                    <li>Les temps de chargement</li>
                                    <li>Le maillage interne</li>
                                    <li>Les fichiers robots.txt et sitemap</li>
                                    <li>La pertinence des mots-clés, la densité et le champ sémantique associé</li>
                                    <li>La qualité et l’originalité du contenu</li>
                                    <li>L’aspect mobile Responsive</li>
                                </ul>
                                <p>
                                    Ces éléments impactent le référencement naturel d’une page, ils contribuent à sa
                                    bonne indexation et l’amélioration de sa visibilité.
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
                                        Qu’est ce que le référencement naturel SEO Off site?
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
                                <h3>Le référencement naturel off-site (Netlinking) se concentre sur les éléments
                                    extérieurs aux pages web qui renforcent sa popularité :</h3>
                                <ul>
                                    <li>Le netlinking et les backlinks (les liens qui pointent vers vos pages en
                                        provenance d’autres sites)</li>
                                    <li>Le benchmarck concurrentiel</li>
                                    <li>Les liens sociaux</li>
                                </ul>
                                <p>
                                    Le moteur du référencement naturel Google off-page désigne la qualité : une page qui
                                    plaît aux internautes obtiendra plus facilement des liens entrants et augmentera sa
                                    popularité. Mais attention, il vaut mieux avoir 10 backlinks de sites populaires que
                                    50 backlinks avec une mauvaise réputation.
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
                                <tr><th>Etape 1 : Audit </th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Audit technique du site<br/>
                                        Analyse concurrentielle <br/>
                                        Analyse des mots clés (marketing digital) <br/>
                                        Audit éditorial des contenus (balises, articles, médias)
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 2 : On Site </th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Optimisations techniques du site Internet<br/>
                                        Optimisations éditoriales des contenus existants
                                        (balises « Méta », articles, médias)
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 3 : Off Site</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Étude de popularité <br/>
                                        Étude des liens externes (BackLink). <br/>
                                        Études des réseauxSociaux Analyse de Popularité
                                        (notes Authority, backlinks, Réseauxsociaux)
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 4 : Déclarations externes</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Déclaration du site sur les moteurs de recherche suivant : Google, Bing et Yahoo
                                        <br/>
                                        Création de comptes Google Search Console et Google Analytics
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 5: Suivi</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Suivi des statistiques de fréquentation via Google Analytics <br/>
                                        Envoi par mail hebdomadaire ou mensuel <br/>
                                        Suivi des positions <br/>
                                        Suivi des liens externes (BackLinks)
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


const SeoPage = ({data}) => {
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
            <SeoPageTemplate
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

SeoPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default SeoPage;

export const pageQuery = graphql`
    query SeoPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "seo-page" } }) {
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
