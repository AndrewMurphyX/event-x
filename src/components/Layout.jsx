import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"

const Container = styled.div`margin:0;padding:0;padding-top:150px;box-sizing:border-box;font-size:16px;`

const Layout = ({children}) => (
  <>
    <Navbar />
    <Container>
        {children}
    </Container>
  </>
)

export default Layout