import styled from 'styled-components';

let Button = styled.button`
  margin: 2rem;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.color.primary || 'gray'};
  background-color: transparent;
  border: 3px dashed ${(props) => props.theme.color.primary || 'gray'};
`;

export default Button;
