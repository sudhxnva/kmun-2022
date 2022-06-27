import React, { useState, useEffect, useContext } from "react"
import { debounce } from "../../util/debounce"
import { Link } from "gatsby"
import MenuContext from "../MenuContext"
import { motion } from "framer-motion"
import { menuItems } from "./NavConstants"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  NavModuleStyles,
  NavTopLevel,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
} from "./NavAnim"

const NavModule = () => {
  const [isOpen, setNav] = useContext(MenuContext)

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    )

    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  const { title } = UseSiteMetadata()

  return (
    <NavModuleStyles>
      <div
        className="nav"
        style={{ transition: "top 0.3s", top: visible ? "0" : "-100px" }}
      >
        <div className="nav-overlay"></div>
        <div className="container">
          <HamburgerStyles
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={isOpen ? " open" : ""}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </HamburgerStyles>

          {title && (
            <LogoStyles>
              <Link to="/">
                {title}
                <span>.</span>
              </Link>
            </LogoStyles>
          )}
        </div>
      </div>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <NavTopLevel>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                activeClassName="menu__item--active"
                className={item.text === "Register" ? "register--item" : ""}
              >
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
          <li>
            <a
              onClick={toggleNav}
              onKeyDown={toggleNav}
              href="https://drive.google.com/uc?export=download&id=1UkHERlxV6kiRsqO0c_OaG5NlrWr0nEgh"
              target="_blank"
              rel="noreferrer"
              activeClassName="menu__item--active"
            >
              Get your handbook
              <span>.</span>
            </a>
          </li>
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
