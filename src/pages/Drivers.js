import React from "react"
import Swiper from "react-id-swiper"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import "../styles/drivers.css"
import Footer from "../components/footer"
import "swiper///css/swiper.css"

const Drivers = ({ data }) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
  }
  return (
    <div id="drivers">
      <Layout />

      <SEO title="Drivers" />

      <div id="grid-container-drivers">
        <div id="top3">
          <Link to="/Hamilton" className="grid-item-drivers">
            <Img fluid={data.Hamilton.childImageSharp.fluid} />
            <p>Lewis Hamilton </p>
          </Link>

          <Link to="/Bottas" className="grid-item-drivers">
            <Img fluid={data.Bottas.childImageSharp.fluid} />
            <p>Valtteri Bottas</p>
          </Link>
          <Link to="/Vettel" className="grid-item-drivers">
            <Img fluid={data.Vettel.childImageSharp.fluid} />
            <p>Sebastian Vettel</p>
          </Link>
          <Link to="/Leclerc" className="grid-item-drivers">
            <Img fluid={data.Leclerc.childImageSharp.fluid} />
            <p>Charles Leclerc</p>
          </Link>
          <Link to="/Verstappen" className="grid-item-drivers">
            <Img fluid={data.Verstappen.childImageSharp.fluid} />
            <p>Max Verstappen</p>
          </Link>
          <Link to="/Albon" className="grid-item-drivers">
            <Img fluid={data.Albon.childImageSharp.fluid} />
            <p>Alexander Albon</p>
          </Link>
        </div>
        <div id="rest">
          <Link to="/Gasly" className="grid-item-drivers">
            <Img fluid={data.Gasly.childImageSharp.fluid} />
            <p>Pierre Gasly</p>
          </Link>
          <Link to="/Giovinazzi" className="grid-item-drivers">
            <Img fluid={data.Giovinazzi.childImageSharp.fluid} />
            <p>Antonio Giovinazzi</p>
          </Link>
          <Link to="/Grosjean" className="grid-item-drivers">
            <Img fluid={data.Grosjean.childImageSharp.fluid} />
            <p>Romain Grosjean</p>
          </Link>
          <Link to="/Hulkenberg" className="grid-item-drivers">
            <Img fluid={data.Hulkenberg.childImageSharp.fluid} />
            <p>Nico Hulkenberg</p>
          </Link>
          <Link to="/Kubica" className="grid-item-drivers">
            <Img fluid={data.Kubica.childImageSharp.fluid} />
            <p>Robert Kubica</p>
          </Link>
          <Link to="/Kvyat" className="grid-item-drivers">
            <Img fluid={data.Kvyat.childImageSharp.fluid} />
            <p>Daniil Kvyat</p>
          </Link>

          <Link to="/Magnussen" className="grid-item-drivers">
            <Img fluid={data.Magnussen.childImageSharp.fluid} />
            <p>Kevin Magnussen</p>
          </Link>
          <Link to="/Norris" className="grid-item-drivers">
            <Img fluid={data.Norris.childImageSharp.fluid} />
            <p>Lando Norris</p>
          </Link>
          <Link to="/Perez" className="grid-item-drivers">
            <Img fluid={data.Perez.childImageSharp.fluid} />
            <p>Sergio Perez</p>
          </Link>
          <Link to="/Raikkonen" className="grid-item-drivers">
            <Img fluid={data.Raikkonen.childImageSharp.fluid} />
            <p>Kimi Räikkönen</p>
          </Link>
          <Link to="/Ricciardo" className="grid-item-drivers">
            <Img fluid={data.Ricciardo.childImageSharp.fluid} />
            <p>Daniel Ricciardo</p>
          </Link>
          <Link to="/Russell" className="grid-item-drivers">
            <Img fluid={data.Russell.childImageSharp.fluid} />
            <p>George Russell</p>
          </Link>
          <Link to="/Sainz" className="grid-item-drivers">
            <Img fluid={data.Sainz.childImageSharp.fluid} />
            <p>Carlos Sainz</p>
          </Link>
          <Link to="/Stroll" className="grid-item-drivers">
            <Img fluid={data.Stroll.childImageSharp.fluid} />
            <p>Lance Stroll</p>
          </Link>
        </div>
      </div>

      <Swiper {...params} className="swiper-drivers-container">
        <Link to="/Albon" className="swiper-drivers">
          <Img fluid={data.Albon.childImageSharp.fluid} />
          <p>Alexander Albon</p>
        </Link>
        <Link to="/Bottas" className="swiper-drivers">
          <Img fluid={data.Bottas.childImageSharp.fluid} />
          <p>Valtteri Bottas</p>
        </Link>
        <Link to="/Gasly" className="swiper-drivers">
          <Img fluid={data.Gasly.childImageSharp.fluid} />
          <p>Pierre Gasly</p>
        </Link>
        <Link to="/Giovinazzi" className="swiper-drivers">
          <Img fluid={data.Giovinazzi.childImageSharp.fluid} />
          <p>Antonio Giovinazzi</p>
        </Link>
        <Link to="/Grosjean" className="swiper-drivers">
          <Img fluid={data.Grosjean.childImageSharp.fluid} />
          <p>Romain Grosjean</p>
        </Link>
        <Link to="/Hamilton" className="swiper-drivers">
          <Img fluid={data.Hamilton.childImageSharp.fluid} />
          <p>Lewis Hamilton </p>
        </Link>
        <Link to="/Hulkenberg" className="swiper-drivers">
          <Img fluid={data.Hulkenberg.childImageSharp.fluid} />
          <p>Nico Hulkenberg</p>
        </Link>
        <Link to="/Kubica" className="swiper-drivers">
          <Img fluid={data.Kubica.childImageSharp.fluid} />
          <p>Robert Kubica</p>
        </Link>
        <Link to="/Kvyat" className="swiper-drivers">
          <Img fluid={data.Kvyat.childImageSharp.fluid} />
          <p>Daniil Kvyat</p>
        </Link>
        <Link to="/Leclerc" className="swiper-drivers">
          <Img fluid={data.Leclerc.childImageSharp.fluid} />
          <p>Charles Leclerc</p>
        </Link>
        <Link to="/Magnussen" className="swiper-drivers">
          <Img fluid={data.Magnussen.childImageSharp.fluid} />
          <p>Kevin Magnussen</p>
        </Link>
        <Link to="/Norris" className="swiper-drivers">
          <Img fluid={data.Norris.childImageSharp.fluid} />
          <p>Lando Norris</p>
        </Link>
        <Link to="/Perez" className="swiper-drivers">
          <Img fluid={data.Perez.childImageSharp.fluid} />
          <p>Sergio Perez</p>
        </Link>
        <Link to="/Raikkonen" className="swiper-drivers">
          <Img fluid={data.Raikkonen.childImageSharp.fluid} />
          <p>Kimi Räikkönen</p>
        </Link>
        <Link to="/Ricciardo" className="swiper-drivers">
          <Img fluid={data.Ricciardo.childImageSharp.fluid} />
          <p>Daniel Ricciardo</p>
        </Link>
        <Link to="/Russell" className="swiper-drivers">
          <Img fluid={data.Russell.childImageSharp.fluid} />
          <p>George Russell</p>
        </Link>
        <Link to="/Sainz" className="swiper-drivers">
          <Img fluid={data.Sainz.childImageSharp.fluid} />
          <p>Carlos Sainz</p>
        </Link>
        <Link to="/Stroll" className="swiper-drivers">
          <Img fluid={data.Stroll.childImageSharp.fluid} />
          <p>Lance Stroll</p>
        </Link>
        <Link to="/Verstappen" className="swiper-drivers">
          <Img fluid={data.Verstappen.childImageSharp.fluid} />
          <p>Max Verstappen</p>
        </Link>
        <Link to="/Vettel" className="swiper-drivers">
          <Img fluid={data.Vettel.childImageSharp.fluid} />
          <p>Sebastian Vettel</p>
        </Link>
      </Swiper>

      <Footer />
    </div>
  )
}
export default Drivers

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    Kubica: file(relativePath: { eq: "drivers/Kubica.jpg" }) {
      ...squareImage
    }
    Albon: file(relativePath: { eq: "drivers/Albon.jpg" }) {
      ...squareImage
    }
    Verstappen: file(relativePath: { eq: "drivers/Verstappen.jpg" }) {
      ...squareImage
    }
    Bottas: file(relativePath: { eq: "drivers/Bottas.jpg" }) {
      ...squareImage
    }
    Giovinazzi: file(relativePath: { eq: "drivers/Giovinazzi.jpg" }) {
      ...squareImage
    }
    Grosjean: file(relativePath: { eq: "drivers/Grosjean.jpg" }) {
      ...squareImage
    }
    Hamilton: file(relativePath: { eq: "drivers/Hamilton.jpg" }) {
      ...squareImage
    }
    Hulkenberg: file(relativePath: { eq: "drivers/Hulkenberg.jpg" }) {
      ...squareImage
    }
    Kvyat: file(relativePath: { eq: "drivers/Kvyat.jpg" }) {
      ...squareImage
    }
    Leclerc: file(relativePath: { eq: "drivers/Leclerc.jpg" }) {
      ...squareImage
    }
    Magnussen: file(relativePath: { eq: "drivers/Magnussen.jpg" }) {
      ...squareImage
    }
    Norris: file(relativePath: { eq: "drivers/Norris.jpg" }) {
      ...squareImage
    }
    Perez: file(relativePath: { eq: "drivers/Perez.jpg" }) {
      ...squareImage
    }
    Gasly: file(relativePath: { eq: "drivers/Gasly.jpg" }) {
      ...squareImage
    }
    Raikkonen: file(relativePath: { eq: "drivers/Raikkonen.jpg" }) {
      ...squareImage
    }
    Ricciardo: file(relativePath: { eq: "drivers/Ricciardo.jpg" }) {
      ...squareImage
    }
    Russell: file(relativePath: { eq: "drivers/Russell.jpg" }) {
      ...squareImage
    }
    Sainz: file(relativePath: { eq: "drivers/Sainz.jpg" }) {
      ...squareImage
    }
    Stroll: file(relativePath: { eq: "drivers/Stroll.jpg" }) {
      ...squareImage
    }
    Vettel: file(relativePath: { eq: "drivers/Vettel.jpg" }) {
      ...squareImage
    }
  }
`
