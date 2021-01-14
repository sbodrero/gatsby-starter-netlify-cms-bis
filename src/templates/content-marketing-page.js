import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const ContentMarketingPageTemplate = ({
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
                                        Qu’est ce que le content marketing?
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
                                    Le content marketing est une stratégie qui repose sur la création et diffusion de
                                    contenu de qualité, utileet informatif pour votre cible. Il permet de développer sa
                                    visibilité et communiquer auprès de votre audience.
                                </p>
                                <p>
                                    Le content Marketing fait partie de la stratégie Inbound Marketing.
                                </p>
                                <h3>Mettez en avant votre expertise, devenez un expert dans votre domaine</h3>
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
                                        Pourquoi faire du content marketing?
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
                                    Le marketing de contenu a pour objectif d’attirer des visiteurs de votre site web et
                                    de les transformer enconsommateur grâce à une stratégie éditoriale, un message clair
                                    et ciblé ainsi que des techniques de narration SEO (faire lien page SEO).
                                </p>
                                <p>
                                    Il permet de développer sa notoriété auprès de son audience cible sur les moteurs de
                                    recherche et les réseaux sociaux. Cette méthode est complètement différente de la
                                    publicité traditionnelle qui est trop intrusive pour le consommateur
                                </p>
                                <p>Le parcours d’achat du client (avons nous un visuel déjà fait de ce style?)</p>
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
                                        Quelles sont les raisons d’adopter le marketing de contenu?
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
                                        Développer votre notoriété: en publiant du contenu de qualité il sera facile de
                                        renforcer l’identité et l’autorité de votre entreprise/marque. Peu à peu vous
                                        apparaîtrez comme un expert dans votre domaine et vos prospects vous
                                        contacteront
                                        naturellement pour répondre à leurs besoins.
                                    </li>
                                    <li>
                                        Améliorer votre visibilité en ligne: la production de contenu vous permet de
                                        développer votre visibilité sur les moteurs de recherche et les réseaux sociaux.
                                        Avec une optimisation des contenus (grâce à des techniques SEO), vous améliorez
                                        votre référencement et augmentez votre trafic.
                                    </li>
                                    <li>
                                        Attirer les prospects: un contenu de qualité vous permet de susciter l’intérêt
                                        de
                                        leads qualifiés. Vous pourrez alors atteindre des prospects qui vous semblez
                                        hors
                                        d’atteinte jusqu’à présent.
                                    </li>
                                    <li>
                                        Fidéliser votre audience: en publiant du contenu régulièrement vous créez  et
                                        maintenez un lienavec votre audience.
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
                        <div className="column is-one-fifth">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 1</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Définir vos buyers persona
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 2</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Définir les besoins et intérêts de vos cibles
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 3</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Construire une ligne éditoriale en lien avec votre audience
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 4</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Créer du contenu de qualité, optimisé au référencement
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 5</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Définir un calendrier éditorial pour publier régulièrement et devenir un
                                        référent/expert dans votre secteur d’activité
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


const ContentMarketingPage = ({data}) => {
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
            <ContentMarketingPageTemplate
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

ContentMarketingPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default ContentMarketingPage;

export const pageQuery = graphql`
    query ContentMarketingPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "content-marketing-page" } }) {
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
