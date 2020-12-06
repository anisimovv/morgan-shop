import styled from "styled-components";
import { Container } from "../_styled/Container";

export const TopBarStyles = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey};
`;

export const TopBarContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 65px;
`
export const TopBarLogo = styled.div`
  flex-grow: 1;
`;

export const TopBarNav = styled.div`
  flex-grow: 8;
`;

export const TopBarActions = styled.div`
  flex-grow: 3;
  justify-content: space-between;
  
`;