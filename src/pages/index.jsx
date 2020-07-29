import React from "react"
import "normalize.css"
import styled from "styled-components"
import { Button, PrimaryButton } from '../components/Button'

const Container = styled.div`
  margin: 3rem auto;
  width: 1000px;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1.5rem;
  font-family: sans-serif;
  justify-content: center;
`

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
`

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background: #555;
`

const EventName = styled.h3`
  padding: 0px 20px;
  font-size: 20px;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const EventDetails = styled.p`
  padding: 0px 20px;
  font-size: 16px;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 2rem;
`

const Event = props => (
  <EventWrapper>
    <Banner />
    <EventName>{props.name}</EventName>
    <EventDetails>{props.details}</EventDetails>
    <PrimaryButton primary text="Contact">Enquire</PrimaryButton>
  </EventWrapper>
)

const events = [
  {
    name: "Figting Blindness",
    details: "Retina 2020 launching in November at the RDS",
  },
  {
    name: "Event X Launch",
    details: "Launch date scheduled for September 1st 2020",
  },
  {
    name: "Random Event",
    details: "Filler event content goes here etc",
  },
]

export default function Home() {
  return (
    <>
    <Container>
      {events.map((event, i) => (
        <Event key={i} name={event.name} details={event.details} />
      ))}
    </Container>
    <Button centered text="View More">View More</Button>
    </>
  )
}
