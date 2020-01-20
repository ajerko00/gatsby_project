import React from "react"
import ImagesNav from "./images-nav"

const NavMob = () => {
  return (
    <div>
      <ImagesNav />
    </div>
  )
}

export default NavMob

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
    Home: file(relativePath: { eq: "layout/home.png" }) {
      ...squareImage
    }
    Teams: file(relativePath: { eq: "layout/teams.png" }) {
      ...squareImage
    }
    Drivers: file(relativePath: { eq: "layout/drivers.png" }) {
      ...squareImage
    }
    Schedule: file(relativePath: { eq: "layout/schedule.png" }) {
      ...squareImage
    }
    Standings: file(relativePath: { eq: "layout/standings.png" }) {
      ...squareImage
    }
    Login: file(relativePath: { eq: "layout/login.png" }) {
      ...squareImage
    }
  }
`
