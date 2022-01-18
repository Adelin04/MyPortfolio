import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import githubIcon from "./icons/github2.svg";

const PopUp_Template = ({ description, toGhithub }) => {
  return (
    <Wrapper>
      {description}
      <Link
        style={{ width: "auto", height: "auto" }}
        to={{ pathname: toGhithub }}
        target={"_blank"}
      >
        <img className="icon-ghithub" src={githubIcon} alt="icon-ghithub" />
      </Link>
    </Wrapper>
  );
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
  font-size: 14px;
  font-weight: bolder;
  color: black;
  border-radius: 15px;
  background: rgba(189, 182, 182, 0.652);

  .icon-ghithub {
    position: absolute;
    left: 260px;
    top: 270px;
    width: 30px;
    height: auto;
  }
`;
