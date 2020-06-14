import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterText>Copyrightⓒ 2020.DaeLee.Allrights reserved</FooterText>
    </div>
  );
};

const FooterText = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  margin-left: -7rem;
  color: white;
  font-family: "Jua", sans-serif;
`;

export default Footer;
