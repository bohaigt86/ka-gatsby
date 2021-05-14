import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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

  const animation = "fadeInUp"
  const dropDownReset = {
    about_us: "hide",
    leadership: "hide",
    admission: "hide",
    our_program: "hide",
    student_life: "hide",
    news_and_events: "hide",
    summer: "hide",
    employment: "hide",
  }
  const [dropdownShown, setDropdownShown] = useState(dropDownReset)
  const [dropdownOpened, setDropdownOpened] = useState("")

  function handleMouseEnter(e) {
    e.stopPropagation()

    const linkName = e.target.dataset.linkName
    // update dropdownOpened
    setDropdownOpened(linkName)

    const keys = Object.keys(dropdownShown)

    if (keys.includes(linkName)) {
      console.log("Key found")
      setDropdownShown({ ...dropDownReset, [linkName]: animation })
    }
  }

  function handleMouseLeave(e) {
    e.stopPropagation()
    const linkName = e.target.dataset.linkName
  }

  function handleMouseLeaveNav(e) {
    e.stopPropagation()

    //reset dropdownOpened
    setDropdownOpened("")
    setDropdownShown({ ...dropDownReset })
  }

  return (
    <header>
      <div
        id="logo"
        onMouseEnter={e => {
          handleMouseLeaveNav(e)
        }}
      >
        <StaticImage
          src="../images/ka-logo.png"
          alt="Keystone Academy Logo"
          width={80}
          placeholder="blurred"
        />
      </div>
      <div id="main-nav">
        <div id="hamburger">Hamburger</div>
        <div className="">
          <nav className="navbar">
            <ul
              className="navbar__nav"
              onMouseLeave={e => {
                setTimeout(handleMouseLeaveNav(e), 550)
              }}
            >
              {data.site.siteMetadata.menuLinks.map(
                ({ name, link, subMenu }) => (
                  <li className={`navbar__item `} key={name}>
                    <Link
                      className={`navbar__link ${
                        dropdownShown[link.substring(1).split("-").join("_")]
                      }`}
                      to={link}
                      data-link-name={link.substring(1).split("-").join("_")}
                      onMouseEnter={e => {
                        setTimeout(handleMouseEnter(e), 0)
                      }}
                      onMouseLeave={e => {
                        setTimeout(handleMouseLeave(e), 0)
                      }}
                    >
                      {name.toUpperCase()}
                    </Link>
                    <div
                      className={`dropdown animate__animated animate__faster animate__${
                        dropdownShown[link.substring(1).split("-").join("_")]
                      }`}
                    >
                      <ul className={`dropdown__menu`}>
                        {subMenu.map(subLink => (
                          <li className="dropdown__item" key={subLink.name}>
                            <Link
                              className="dropdown__link"
                              to={`${link.link}${subLink.link}`}
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              )}
            </ul>
          </nav>
          <nav className="navbar-mobile">
            <ul>
              {data.site.siteMetadata.menuLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div id="language-selector">EN | 中</div>
      </div>
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
