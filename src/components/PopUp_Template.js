import React from "react";
import styled from "styled-components";

const PopUp_Template = ({ description }) => {
  return <Wrapper>{description}</Wrapper>;
};

export default PopUp_Template;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  text-align: center;
  color: black;
  border-radius: 15px;
  background: rgba(189, 182, 182, 0.652);
`;
