import React, { useEffect } from 'react'
import styled from 'styled-components';
import LeftSide from './Leftside';
import Main from './Main';
import RightSide from './Rightside';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router';


const Home = (props) => {
    const navigate=useNavigate();
    useEffect(()=>{
        if(!props.user){
            return navigate('/');
        }
    },[props.user,props.history]);
  return (
    <Container>
        <Section>
            <h5><a>Hiring in a hurry? -</a></h5>
            <p>Find talented pros in record time with Upwork and keep bussiness moving</p>

        </Section>
      <Layout>
      <LeftSide/>
      <Main/>
      <RightSide/>

      </Layout>
    </Container>
  )
}

const Container=styled.div`
    padding-top:52px;
    max-width:100%;

`;

const Content=styled.div`
    max-width: 1128px;
    margin-left:auto;
    margin-right: auto;
`;

const Section=styled.div`
    min-height: 50px;
    padding:16px 0;
    box-sizing: content-box;
    text-align:center;
    text-decoration: underline;
    display:flex;
    justify-content: center;
    h5{
        color:#0a66c2;
        font-size:16px;
        a{
        font-weight:14px;  
    }
    }

    p{
        font-size:14px;
        color:#434649;
        font-weight: 600;
    }

    @media (max-width:768px){
        flex-direction: column;
        padding:  0 5px;

       
    }
    
`;

const Layout=styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    /* grid-template-columns: minmax(0,5fr) minmax(0,5fr) minmax(0px,7fr); */
    grid-template-columns: auto auto 30%;
    column-gap: 25px;
    row-gap:25px;
    /* grid-template-rows: auto; */
    margin: 25px 0;

    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }

`;

const mapStateToProps=(state)=>{
    return{
        user: state.userState.user,
    }
}
export default connect(mapStateToProps)(Home)
