import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #EB0045;
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #fff;
  text-transform: uppercase;
`

const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
`

const Header = props => (
  <Container>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
  </Container>
)

export default Header
