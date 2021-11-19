/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  /* background-color: #00000070; */
  padding: 0px 12px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: none;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <p>
        Orgulhosamente criado pelos alunos do 302:{' '}
        <span>
          <b>Ana, Emmanuel, Felipe J., Gabriel, Julia e Sofia</b>
        </span>
      </p>
    </FooterWrapper>
  );
}
