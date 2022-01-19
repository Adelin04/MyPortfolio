import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import githubIcon from "./icons/github2.svg";

const PopUp_Template = ({ description, toGhithub }) => {
  return (
    <Wrapper>
      <div className="wrapper-description">
        {description}
      </div>
      <Link
        style={{ width: "auto", height: "auto" }}
        to={{ pathname: toGhithub }}
        target={"_blank"}
      >
        <img className="icon-ghithub" src={githubIcon} alt="icon-ghithub" />
        <p className="msg-icon">To see the code please click on github icon.</p>
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
  border-radius: 15px;
  background: rgba(189, 182, 182, 0.652);

  .wrapper-description {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;
    height: 300px;
    text-align: center;
    font-size: 15px;
    font-weight: bolder;
    color: black;
  }

  .icon-ghithub {
    position: absolute;
    left: 260px;
    top: 270px;
    width: 30px;
    height: auto;
  }

  .msg-icon {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 15px;
    font-size: 13px;
    color: black;
    font-style: italic;
    top: 280px;
    left: 10px;
  }

  @media screen and (max-width: 500px) {
    .wrapper-description {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px;
      width: 90%;
      height: auto;
      text-align: center;
      font-size: 8px;
      font-weight: bolder;
      color: black;
    }

    .msg-icon {
      position: absolute;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: auto;
      height: 15px;
      font-size: 8px;
      color: black;
      font-style: italic;
      top: 150px;
      left: 8px;
    }
    .icon-ghithub {
      position: absolute;
      left: 155px;
      top: 150px;
      width: 20px;
      height: auto;
    }
  }
`;
