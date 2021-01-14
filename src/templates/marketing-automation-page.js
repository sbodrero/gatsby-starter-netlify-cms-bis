import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import Layout from '../components/Layout';

export const MarketingAutomationPageTemplate = ({
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
                                        Les étapes du marketing Automation
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
                                <tr><th>Etape 1 : identifier les leadsqualifiés</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Contenu de qualité: attirer les prospects avec des contenu premium<br/>
                                        CTA pour envoyer le leadvers une landing page <br/>
                                        Landing page: insérer unformulaire pour obtenir les coordonnées des leads
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etape 2 : Conclure</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        CRM: synchroniser le marketing automation avec le CRM pour suivre les actions
                                        <br/>
                                        Lead nurturing: faire évoluer le prospect <br/>
                                        Lead scoring: définir le degré de maturité d’un lead suivant les actions qu’il
                                        réalise
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column is-one-fifth has-text-centered">
                            <table className="table is-bordered">
                                <thead>
                                <tr><th>Etude 3 : Fidéliser</th></tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Reporting <br/>
                                        Maintenir le lien en lui envoyant des contenus répondant à ses besoins <br/>
                                        Recueillir des avis clients
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
                                        Qu’est ce que le marketing automation?
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
                                    Le marketing automation consiste à automatiser un ensemble d’actions répétitives
                                    (comme des campagnes emails par exemple) afin de gagner du temps (et donc de
                                    l’argent).
                                </p>
                                <p>
                                    Grâce aux critères définis au préalable, vous vous assurez que ces actions soient
                                    déclenchées (workflows) au moment souhaité sur une cible en particulier.
                                </p>
                                <p>
                                    En marketing B2B, le terme marketing automation a pour objectif de générer et de
                                    faire évoluer les prospects qualifiés tout au long du parcours d’achat.
                                </p>
                                <h3>Gagnez du temps, automatiser vos actions marketing</h3>
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
                                        Quels sont les objectifs du marketing Automation?
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
                                        Acquérir des leads: toucher des contacts qualifiés est primordial pour
                                        développer son chiffre d’affaires. Les landing pages, CTA, formulaires qui font
                                        partie du marketing automation sont detrès bon outils de développement.</li>
                                    <li>
                                        Optimiser l’entonnoir de conversion: une fois le lead capté, vous devez le faire
                                        évoluer dans votre tunnel de conversion. Grâce au marketing automation vous
                                        envoyez les contenus crées au bonne personne au bon moment.
                                    </li>
                                    <li>
                                        Facilité la partie commerciale: en fonction des actions menées sur vos leads,
                                        ces derniers se voit attribuer une note suivant leur degré de maturation. Cette
                                        méthode permet aux commerciaux de se concentrer sur les prospects les plus
                                        intéressants.
                                    </li>
                                    <li>
                                        Fidéliser les clients: grâce à cet outil vous pouvez mettre en place des emails
                                        pour par exemple lui envoyer un questionnaire de satisfaction, lui souhaitez son
                                        anniversaire etc afin de maintenir le lien avec lui.
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
                                        Quels sont les avantages?
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
                                    <li>Meilleure connaissance des prospects</li>
                                    <li>Suivre leurs comportements grâce à un tracking performant </li>
                                    <li>
                                        Gain de temps: les envois automatisés permettent aux équipes marketing de
                                        réduire le temps detravail sur les relances ou reporting par exemple et se
                                        concentrer sur d’autres tâches plus stratégiques.
                                    </li>
                                    <li>
                                        Gain de temps pour les commerciaux qui ont leur leads classés et peuvent se
                                        concentrer sur les prospects les plus proches de l’achat
                                    </li>
                                    <li>
                                        Créer une relation de proximité et de confiance en envoyant du contenu qui
                                        correspond aux besoins des cibles.
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
                                        Questions fréquentes sur le marketing automation
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
                                <h3>Qu est ce qu’un workflow en marketing automation?</h3>
                                <p>
                                    Un workflow est un scénario d’actions déclenchées par une action qu’un lead
                                    effectue. Par exemple si un prospect télécharge un guide, il va rentrer dans un
                                    workflow spécifique et recevra donc des mails de remerciement, de suggestion de
                                    ressources.
                                </p>
                                <h3>Pourquoi il n’est pas facile de faire du marketing automation?</h3>
                                <p>
                                    Le marketing automation ne peut pas fonctionner si aucune stratégie de génération
                                    de leads n’a été mise en place au préalable.
                                </p>
                                <p>
                                    Une fois la stratégie et le tunnel de conversion adapté mis en place, il est
                                    important de comprendre que cette méthode prend du temps, du travail pour
                                    développer ses leads qualifiés et accroître son CA.
                                </p>
                                <h3>Comment choisir son outil de marketing automation?</h3>
                                <ul>Il est important de choisir un logiciel qui correspond à vos besoins et vos
                                    objectifs.
                                    <li>Le prix</li>
                                    <li>L’interface: simple d’utilisation</li>
                                    <li>Les fonctionnalités de l’outil: possibilité de créer des landings pages?
                                        De faire du scoring? Quel est le niveau de suivi?</li>
                                    <li>
                                        Vérifier la compatibilité avec vos autres outils interne comme par exemple le
                                        CRM
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);


const MarketingAutomationPage = ({data}) => {
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
            <MarketingAutomationPageTemplate
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

MarketingAutomationPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default MarketingAutomationPage;

export const pageQuery = graphql`
    query MarketingAutomationPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "marketing-automation-page" } }) {
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
