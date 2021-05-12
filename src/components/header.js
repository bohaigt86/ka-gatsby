import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

function Header() {
  const data = useStaticQuery(
    graphql`
      query SiteMenuLinksQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              link
              name
              subMenu {
                link
                name
              }
            }
          }
        }
      }
    `
  )
  console.log(data.site.siteMetadata.menuLinks)

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
      <nav className="navbar">
        <ul>
          {data.site.siteMetadata.menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
              <div>
                <ul>
                  {link.subMenu.map(subLink => (
                    <li key={subLink.name}>
                      <Link to={`${link.link}${subLink.link}`}>
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
