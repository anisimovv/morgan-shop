import React from "react";
import NavLink from "next/link";

import {
  TopBarActions,
  TopBarContainer,
  TopBarLogo,
  TopBarNav,
  TopBarStyles,
} from "./TopBarStyles";

import Navigation from "../Navigation/Navigation";

interface Props {}

const TopBar = (props: Props) => {
  return (
    <TopBarStyles>
      <TopBarContainer>
        <TopBarLogo>
          <NavLink href="/">Logo</NavLink>
        </TopBarLogo>
        <TopBarNav>
          <Navigation />
        </TopBarNav>
        <TopBarActions>Icons here</TopBarActions>
      </TopBarContainer>
    </TopBarStyles>
  );
};

export default TopBar;
