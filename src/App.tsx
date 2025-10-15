import styled from "styled-components";
import icon from "../images/Rectangle 1.svg"
import { Content } from "./styles/Content.styled";
import { StyledBtn } from "./styles/Button.styled";

function App() {
  return (
    <>
    <Box>
      <img src={icon} height={'170px'} width={'280px'}  />      
      <Content contentType={"title"}>Headline</Content>
      <Content contentType={"article"}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Content>
      <Conteiner >
        <StyledBtn  btnType={"primary"}>See more</StyledBtn>
        <StyledBtn btnType={"outline"}>Save</StyledBtn>
      </Conteiner>
    </Box>
    </>
  )
}

export default App

const Box = styled.div`
  height: 350px;
  width: 300px;
  
  display: flex;   
  flex-direction: column;     
  justify-content:space-around;
  padding: 5px 10px 20px 10px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`

      
const Conteiner = styled.div`
  padding-left: 10px;
  display: flex;      
  justify-content: left;
  gap:10px;
`
