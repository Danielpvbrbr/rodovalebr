import styled,{keyframes} from 'styled-components';
const special = keyframes`
  from {
    color: #00FF7F ;
  }

  to {
    color: #FF00FF ;
  }
`;

const star = keyframes`
  from {
    color: #FFD700 ;
  }

  to {
    color:  #FFFF00 ;
   
  }
`;
export const Container = styled.div`
    width:100vw;
    height: 100vh;
    background-color: #363636	;
`;

export const Area = styled.div`
    width:300px;
    height: 100vh;
    background-color: #4169E1;
    border:1px solid #ffff ;
    display:flex ;
    align-items: center;
    flex-direction:column ;
    border-radius:10px ;
`;
export const AreaTitle = styled.div`
    width:298px;
    height: 40px;
    display:flex ;
    justify-content:center ;
    align-items: center;
    flex-direction:column ;
    background-color: #244edb;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
   
   input{
    border:none ;
    font-size:15pt ;
    background-color: #244edb;
    color:#ffff ;
   }
`;

export const AreaBody = styled.div`
    width:280px;
    height: 80vh;
    overflow-y:scroll ;
    margin-bottom:10px ;
    ::-webkit-scrollbar{
    display: none;
   }
`;
export const Title = styled.h4`
    font-size:15pt ;
    color:#fff ;
`;
export const Name = styled.h4`
    font-size:15pt ;
    margin-top:7px ;
    color:#fff ;
    font-weight:500 ;
`;
export const NameSpecial = styled.h4`
   font-size: 15pt ;
   animation: ${special} 2s linear infinite;
   margin-top:10px ;

   svg{
    animation: ${star} 2s linear infinite;
   }
`;
export const Input = styled.input`
   color: #fff;
   font-size: 15pt ;
   outline:none ;
   background-color: #4169E1;
   border:none ;
   margin-top: 7px;
   margin-bottom: 12px;
`;
export const AreaControl = styled.div`
    width:280px;
    height: 170px;
    background-color: #244edb;
    border: 2px solid #fff ;
    border-radius:10px ;
    margin-bottom:10px ;
`;
export const AreaInfo = styled.div`
    width:280px;
    height: 150px;
    display:flex;
    flex-direction:column ;

`;
export const ImgInfo = styled.div`
    width:280px;
    height: 50px;
    display:flex;
    flex-direction:row ;
    align-items:center ;
    cursor:pointer;

    img{
        width:50px ;
        margin-top:10px ;
    }
    h4{
        color:#fff;
        font-size:12pt;
    }
`;



