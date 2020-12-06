import React from "react";
import NavLink from "next/link";
import { NavigationStyles } from "./NavigationStyles";

interface Props {}

const Navigation = (props: Props) => {
  return (
    <NavigationStyles>
      <ul>
        <li>
          <NavLink href="/interior-ceiling">Interior ceiling</NavLink>
        </li>
        <li>
          <NavLink href="/floor-lamps">Floor lamps</NavLink>
        </li>
        <li>
          <NavLink href="/exterior-ceiling">Exterior ceilings</NavLink>
        </li>
        <li>
          <NavLink href="/table-lamps">Table lamps</NavLink>
        </li>
      </ul>
    </NavigationStyles>
  );
};

export default Navigation;
