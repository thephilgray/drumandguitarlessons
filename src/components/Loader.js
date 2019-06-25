import React from "react"
import styled from "styled-components"
import { Container } from "@material-ui/core"
import Icon from "../svgs/loader.svg"

const StyledLoader = styled(Icon)`
  @keyframes minute-animation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes hour-animation {
    from {
      transform: rotate(-45deg);
    }
    to {
      transform: rotate(45deg);
    }
  }

  .minute-hand,
  .hour-hand {
    transform-origin: 50%;
  }

  .minute-hand {
    animation: 3s minute-animation linear infinite;
  }

  .hour-hand {
    animation: 10s hour-animation linear infinite;
  }
`

export default function Loader() {
  return (
    <Container align="center">
      <StyledLoader />
    </Container>
  )
}
