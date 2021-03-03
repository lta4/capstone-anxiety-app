import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
          <h2 style={{ margin: 0 }}>
            <Link
              to="/page-2/"
              style={{
            color: `red`,
            textDecoration: `none`,
          }}
        >
        {/* <Link to="/page-2/">Favs</Link>
        <Link to="/page-3/">About</Link>
        <Link to="/page-4/">Resources</Link> */}
        </Link>
        </h2>
          {siteTitle}
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
