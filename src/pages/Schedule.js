import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/schedule.css"
import Footer from "../components/footer"
import Swiper from "react-id-swiper"

import "swiper///css/swiper.css"

const Schedule = ({ data }) => {
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
    <>
      <Layout />
      <div className="schedule">
        <SEO title="Schedule" />

        <div id="grid-container-schedule">
          <div className="grid-item-schedule">
            <Img fluid={data.Melbourne.childImageSharp.fluid} />
            <p>15 - 17 MAR</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Sakhir.childImageSharp.fluid} />
            <p>29 - 31 MAR</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Shangai.childImageSharp.fluid} />
            <p>12 - 14 APR</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Baku.childImageSharp.fluid} />
            <p>26 - 28 APR</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Barcelona.childImageSharp.fluid} />
            <p>10 - 12 MAY</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.MonteCarlo.childImageSharp.fluid} />
            <p>23 - 26 MAY</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Montreal.childImageSharp.fluid} />
            <p>07 - 09 JUN</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.LeCastellet.childImageSharp.fluid} />
            <p>21 -23 JUN</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.RedBullRing.childImageSharp.fluid} />
            <p>28 - 30 JUN</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Silverstone.childImageSharp.fluid} />
            <p>12 - 14 JUL</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Hockenheim.childImageSharp.fluid} />
            <p>26 - 28 JUL</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Budapest.childImageSharp.fluid} />
            <p>02 - 04 AUG</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Spa.childImageSharp.fluid} />
            <p>30 AUG - 01 SEP</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Monza.childImageSharp.fluid} />
            <p>06 - 08 SEP</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Singapore.childImageSharp.fluid} />
            <p>20 - 22 SEP</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Sochi.childImageSharp.fluid} />
            <p>27 - 29 SEP</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Suzuka.childImageSharp.fluid} />
            <p>11 - 13 OCT</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.MexicoCity.childImageSharp.fluid} />
            <p>25 - 27 OCT</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.Austin.childImageSharp.fluid} />
            <p>01 - 03 NOV</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.SaoPaulo.childImageSharp.fluid} />
            <p>15 -17 NOV</p>
          </div>
          <div className="grid-item-schedule">
            <Img fluid={data.AbuDhabi.childImageSharp.fluid} />
            <p>29 NOV - 01 DEC</p>
          </div>
        </div>

        <Swiper {...params} className="swiper-schedule-container">
          <div className="swiper-schedule">
            <Img fluid={data.Melbourne.childImageSharp.fluid} />
            <p>15 - 17 MAR</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Sakhir.childImageSharp.fluid} />
            <p>29 - 31 MAR</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Shangai.childImageSharp.fluid} />
            <p>12 - 14 APR</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Baku.childImageSharp.fluid} />
            <p>26 - 28 APR</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Barcelona.childImageSharp.fluid} />
            <p>10 - 12 MAY</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.MonteCarlo.childImageSharp.fluid} />
            <p>23 - 26 MAY</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Montreal.childImageSharp.fluid} />
            <p>07 - 09 JUN</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.LeCastellet.childImageSharp.fluid} />
            <p>21 -23 JUN</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.RedBullRing.childImageSharp.fluid} />
            <p>28 - 30 JUN</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Silverstone.childImageSharp.fluid} />
            <p>12 - 14 JUL</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Hockenheim.childImageSharp.fluid} />
            <p>26 - 28 JUL</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Budapest.childImageSharp.fluid} />
            <p>02 - 04 AUG</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Spa.childImageSharp.fluid} />
            <p>30 AUG - 01 SEP</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Monza.childImageSharp.fluid} />
            <p>06 - 08 SEP</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Singapore.childImageSharp.fluid} />
            <p>20 - 22 SEP</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Sochi.childImageSharp.fluid} />
            <p>27 - 29 SEP</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Suzuka.childImageSharp.fluid} />
            <p>11 - 13 OCT</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.MexicoCity.childImageSharp.fluid} />
            <p>25 - 27 OCT</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.Austin.childImageSharp.fluid} />
            <p>01 - 03 NOV</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.SaoPaulo.childImageSharp.fluid} />
            <p>15 -17 NOV</p>
          </div>
          <div className="swiper-schedule">
            <Img fluid={data.AbuDhabi.childImageSharp.fluid} />
            <p>29 NOV - 01 DEC</p>
          </div>
        </Swiper>
      </div>
      <Footer />
    </>
  )
}
export default Schedule

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
    AbuDhabi: file(relativePath: { eq: "schedule/AbuDhabi.png" }) {
      ...squareImage
    }
    Austin: file(relativePath: { eq: "schedule/Austin.png" }) {
      ...squareImage
    }
    Baku: file(relativePath: { eq: "schedule/Baku.png" }) {
      ...squareImage
    }
    Barcelona: file(relativePath: { eq: "schedule/Barcelona.png" }) {
      ...squareImage
    }
    Budapest: file(relativePath: { eq: "schedule/Budapest.png" }) {
      ...squareImage
    }
    Hockenheim: file(relativePath: { eq: "schedule/Hockenheim.png" }) {
      ...squareImage
    }
    LeCastellet: file(relativePath: { eq: "schedule/LeCastellet.png" }) {
      ...squareImage
    }
    Melbourne: file(relativePath: { eq: "schedule/Melbourne.png" }) {
      ...squareImage
    }
    MexicoCity: file(relativePath: { eq: "schedule/MexicoCity.png" }) {
      ...squareImage
    }
    MonteCarlo: file(relativePath: { eq: "schedule/MonteCarlo.png" }) {
      ...squareImage
    }
    Montreal: file(relativePath: { eq: "schedule/Montreal.png" }) {
      ...squareImage
    }
    Monza: file(relativePath: { eq: "schedule/Monza.png" }) {
      ...squareImage
    }
    RedBullRing: file(relativePath: { eq: "schedule/RedBullRing.png" }) {
      ...squareImage
    }
    Sakhir: file(relativePath: { eq: "schedule/Sakhir.png" }) {
      ...squareImage
    }
    SaoPaulo: file(relativePath: { eq: "schedule/SaoPaulo.png" }) {
      ...squareImage
    }
    Shangai: file(relativePath: { eq: "schedule/Shangai.png" }) {
      ...squareImage
    }
    Silverstone: file(relativePath: { eq: "schedule/Silverstone.png" }) {
      ...squareImage
    }
    Singapore: file(relativePath: { eq: "schedule/Singapore.png" }) {
      ...squareImage
    }
    Sochi: file(relativePath: { eq: "schedule/Sochi.png" }) {
      ...squareImage
    }
    Spa: file(relativePath: { eq: "schedule/Spa.png" }) {
      ...squareImage
    }
    Suzuka: file(relativePath: { eq: "schedule/Suzuka.png" }) {
      ...squareImage
    }
  }
`
