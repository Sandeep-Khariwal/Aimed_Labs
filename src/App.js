import './App.scss';
import pic from "./images/pic.jpg"
import styled from 'styled-components'

const Container = styled.main`
 width:100%;
 min-height:100vh;
 padding:1rem;
 background-color:white;
 display:flex;
 @media(max-width:1000px){
  flex-direction:column;
  justify-cintent:center;
  align-items:center;
 }
`;

const Login = styled.h2`
 text-align: center;
 font-weight: 700;
 font-family: sans-serif;
`;

const Div = styled.div`
  &.logo{
    width:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #fbffff;
  @media(max-width:1000px){
    width:60%;
  }
    
  }
  &.login{
    width:50%;
    height:90%;
    margin:auto;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    background-color: #fbffff;
    border:2px solid #fbffff;
    border-radius:1rem;
    -webkit-box-shadow: 0 0 10px #D3D3D3;
    box-shadow: 0 0 10px grey;

    @media(max-width:1000px){
      width:80%;
    }
    @media(max-width:600px){
      width:90%;
    }

  }

  &.fields{
    width:60%;
    margin:auto;
    @media(max-width:600px){
      width:90%;
    }
  }

  &.texts{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;

  }

  
  `
  
  const Img = styled.img`
  width:100%;
  `

const Input = styled.input`
  width:90%;
  padding:0.7rem;
  border:2px solid grey;
  border-radius: 0.3rem;
`

const P = styled.p`
font-family:sans-serif;
font-weight:550;
color:#454545;

&.pswrd{
  color:orange;
  cursor:pointer;
}

&.noaccount{
  text-align:center;
}
`

const Label = styled.label`
color:grey;
`

const Span = styled.span`
color:orange;
text-decoration:underline;
cursor:pointer;
`

const Button = styled.button`
margin-top:1rem;
width:100%;
padding:0.8rem;
color:white;
border:2px solid #0074B7;
border-radius:0.3rem;
background-color:#0074B7;
cursor:pointer;


`


function App() {

  return(
    <Container>
      <Div className='logo'>
      <Img src={pic} />
      </Div>

      <Div className='login'>
        <Div className='fields'>
        <Login>Login</Login>
         <P>Login ID</P>
         <Input type='text' placeholder='Enter Login ID' /> <br/><br/>
         <P>Password</P>
         <Input type='Password' placeholder='Enter Password'/>
         <Div className='texts' >
          <div>
          <input type='checkbox' />
          <Label>Remember Me</Label>
          </div>
          <P className='pswrd' >Change Password</P>
         </Div>
        <input type='checkbox' />
        <Label>Agree to <Span>Terms & Conditions</Span></Label>
        <Button>Login</Button>
        <P className='noaccount' >Don't have any account? <Span>Register Here</Span></P>
        </Div>
      </Div>

    </Container>
  );
}

export default App;
