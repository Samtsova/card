import styled, { css } from "styled-components";

type ContentPropsType = {
    contentType?: string
}

export const Content = styled.p<ContentPropsType>`

    margin: 10px;

      ${(props) =>
    props.contentType === "title" &&
    css<ContentPropsType>`
        font-weight: 700;
        font-size: 16px; 
        color: #000000 
      `}
      
      ${(props) =>
    props.contentType === "article" &&
    css<ContentPropsType>`
        font-weight: 500;
        font-size: 12px; 
        color: #ABB3BA 
      `}
`