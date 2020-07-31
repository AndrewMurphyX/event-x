import React from "react"
import styled from "styled-components"
import LogoX from "../assets/logo.png"

const Container = styled.nav`
  background: #fff;
  position: fixed;
  z-index: 2;
  box-shadow: 0px 2px 0px 2px rgba(235, 0, 69, 0.6);
  top: 0;
  padding: 24px;
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Grid = styled.div`
  width: 1200px;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2em;
  justify-content: space-between;
`
const Logo = styled.div`
  width: 165px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 24px;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.5px;
  margin-left: 24px;
  position: relative;
  text-transform: uppercase;
  padding: 6px;
`

const ActiveLink = styled(StyledLink)`
  &:after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 6px;
    display: block;
    content: "";
    width: 100%;
    height: 6px;
    filter: blur(0.25px);
    background: rgba(235, 0, 69, 0.6);
    z-index: -1;
    transition: 0.5s;
  }
  &:hover:after {
    background: rgba(235, 0, 69, 0.8);
    bottom: 0px;
  }
`

const Navbar = props => (
  <Container>
    <Grid>
      <Logo>
        <img
          src={LogoX}
          width="165px"
          height="22px"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </Logo>
      <NavLinks>
        <ActiveLink href="/">Home</ActiveLink>
        <StyledLink href="/events">Our Events</StyledLink>
        <StyledLink href="/contact">Contact Us</StyledLink>
      </NavLinks>
    </Grid>
  </Container>
)

export default Navbar
