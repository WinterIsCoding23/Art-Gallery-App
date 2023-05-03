import Link from "next/link";
import styled from "styled-components";

const StyledNavigation = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;
    background-color: lightblue;
 
    `

const StyledLink = styled.a`
    text-decoration: none;
    &:hover {
      color: blue;
    }
    &: visited {
      color: darkgreen;
    }
    &: active {
      color: red;
    }
    `

export default function Navigation() {
  return (
    
      <StyledNavigation>
        <div><StyledLink href="/">Home</StyledLink></div>
        <div><StyledLink href="spotlight">Spotlight</StyledLink></div>
        <div><StyledLink href="art-pieces">All art pieces</StyledLink></div>
      </StyledNavigation>
    
  );
}
