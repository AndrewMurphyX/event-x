import React from "react"
import styled from "styled-components"

export const Button = styled.button`
  width: 108px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  background: transparent;
  border-radius: 5px;
  border: 1px solid #555;
  margin: ${props => (props.centered ? "0 auto" : "2rem 20px")};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: sans-serif;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #fff;
    background: #555;
    border: 1px solid #777;
  }
`

export const PrimaryButton = styled(Button)`
  color: #eee;
  background: #555;
  &:hover{
      color:#fff;
      background: #777;
  }
`
