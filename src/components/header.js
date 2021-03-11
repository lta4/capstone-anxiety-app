import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { propTypes } from "gatsby-plugin-image/dist/src/components/static-image.server"

const Header = ({ siteTitle }) => (
  <header className="head"><a className="top"></a>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="hTitle">
        <Link to="/" className="title">
        {siteTitle}
          <div>
            <p className="pageLinks">
              <Link className= "pg2" to="/quote/">Quotes</Link>
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
