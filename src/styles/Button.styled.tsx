import { css, styled } from "styled-components";

type StyledBtnPropsType = {
  btnType: "primary" | "outline";
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold; 
  letter-spacing: 0; 

  ${(props) =>
    props.btnType === "outline" &&
    css<StyledBtnPropsType>`
    
  border: 2px solid #4E71FE;
  color:  #4E71FE;
  background-color: transparent;
    `}

  ${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnPropsType>`
      border: 2px solid #4E71FE;
      background-color: #4E71FE;
      color: #FFFFFF ;   
  
    `}

   
`;