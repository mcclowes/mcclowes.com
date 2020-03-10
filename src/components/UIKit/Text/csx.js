import styled from "styled-components/macro";

export const Header = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 1.2em;
  font-family: Helventica, Arial, sans-serif;
  margin: 0;
`;

Header.defaultProps = {
  theme: {
    colors: {
      text: "#333333"
    }
  }
};

export const Paragraph = styled.p`
  color: ${props => props.theme.colors.text};
  font-family: Helventica, Arial, sans-serif;
  margin: 0;
`;

Paragraph.defaultProps = {
  theme: {
    colors: {
      text: "#333333"
    }
  }
};

export const Meta = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: ${props => props.theme.colors.meta};
  font-family: Helventica, Arial, sans-serif;
  margin: 0;
`;

Meta.defaultProps = {
  theme: {
    colors: {
      meta: "#aaaaaa"
    }
  }
};
