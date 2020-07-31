import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Button } from "../components/Button"

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`

const EventTemplate = ({ data }) => {
  const { markdownRemark: event } = data
  return (
    <Layout>
      <Container>
        <Title>{event.frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: event.html }} />
        <Link to="/events">
          <Button>View All</Button>
        </Link>
      </Container>
    </Layout>
  )
}

export default EventTemplate

export const pageQuery = graphql`
  query EventByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        eventStreaming
      }
    }
  }
`
