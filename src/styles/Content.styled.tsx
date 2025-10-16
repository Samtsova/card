import styled, { css } from "styled-components";

type ContentPropsType = {
    contentType?: string
}

export const Content = styled.p<ContentPropsType>`

    margin: 0 10px; 
    font-family: 'Inter';

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
        font-size: 12px; 
        line-height: 20px;
        color: #ABB3BA 
      `}
`