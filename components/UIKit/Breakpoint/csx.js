import styled from "styled-components/macro";
import { breakpoints } from "../../../utils/styles";

const breakpointSizes = ["xSmall", "small", "medium", "large", "xLarge"];

export const Breakpoint = styled.div`
  ${(props) =>
    props.sizes &&
    props.sizes.map(
      (size, i) =>
        !size &&
        breakpoints.breakpoint(
          breakpointSizes[i],
          "only",
          `
                  display: none;
                `
        )
    )};
`;
