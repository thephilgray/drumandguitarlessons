import React from "react"
import styled from "styled-components"
import Icon from "../svgs/loader.svg"

const StyledLoader = styled(Icon)`
  display: block;
  margin: 0 auto;
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
  .drum-rim,
  .minute-hand,
  .hour-hand{
    fill: ${theme => theme.invert ? '#fff' : '#D95141'};
  }

  .minute-hand,
  .hour-hand {
    transform-origin: 50%;
  }
  .minute-hand{
    ${({animate}) => animate && `animation: 3s minute-animation linear infinite;`
  }

  .hour-hand {
    ${({animate}) => animate && `animation: 10s hour-animation linear infinite;`
  }
`;

export default function Loader({small=false, invert, animate=true}) {
  return (
      <StyledLoader small={small ? 1 : null} invert={invert ? 1 : null} animate={animate ? 1 : null} />
  )
}
