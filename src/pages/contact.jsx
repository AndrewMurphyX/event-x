import React from "react"
import "normalize.css"
import styled from "styled-components"
import { Button, PrimaryButton } from "../components/Button"
import Header from "../components/Header"
import Layout from "../components/Layout"
import "../custom.css"

const Container = styled.div`
  margin: 3rem auto;
  width: 1000px;
  max-width: 100%;
  display: flex;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1.5rem;
  font-family: "Proxima Nova", sans-serif;
  justify-content: center;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
`



const ContactForm = props => (
  <FormWrapper>
    Contact Form goes here ...
  </FormWrapper>
)


const ContactPage =() => {
  return (
    <Layout>
      <Header title='contact us' subtitle='Get In Touch Today' />
      <Container style={{marginTop: 150}}>
        <ContactForm/>
      </Container>
      <Button centered text="View More" style={{ marginBottom: "100px" }}>
        View More
      </Button>
    </Layout>
  )
}

export default ContactPage