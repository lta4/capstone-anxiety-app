import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { propTypes } from "gatsby-plugin-image/dist/src/components/static-image.server"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#A7D1A7`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        {siteTitle}
          <div>
            <p className="pageLinks">
              <Link className= "pg2" to="/fav/">Favs</Link>
              <Link className= "pg3" to="/about/">About</Link>
              <Link className= "pg4" to="/resource/">Resources</Link>
            </p>
          </div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
