import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

export default function Header () {
  return (
    <HeaderContainer>
      <Logo>Art Gallery</Logo>
      <Links>
        <Link href="/">
          <NavLink>Spotlight</NavLink>
        </Link>
        <Link href="/art-pieces">
          <NavLink>All Art Pieces</NavLink>
        </Link>
      </Links>
    </HeaderContainer>
  );
};

