import styled from 'styled-components'
import useScreenSize from '../hooks/useScreenSize'
import Logo from '../assets/logo2.png'
import Welcome from '../assets/welcome.png'

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const GreetingContainer = styled.div`
display: flex;
width: 100%;
background-color: #fff6ea;
@media (width < 1000px) {
flex-direction: column;
align-items: center;
}
`
const StyledLogo = styled.img`
height: 20%;
width: 20%;
margin: 20px 40px;
@media (width < 1000px) {
  height: 40%;
  width: 40%;
  }
`
const StyledWelcome = styled.img`
width: 40%;
margin: 20px 40px;
@media (width < 1000px) {
  width: 75%;
  margin: 0;
  }
`
const HeadingContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
background-color: #fff6ea;
padding: 3% 0;
`
const Heading = styled.h2`
font-family: "Salsa", cursive;
font-size: 40px;
margin: 0;
@media (width < 1000px) {
  font-size: 30px;
  line-height: 1.2;
}
`
const StyledAboutMeDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const StyledBioDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;


`
const StyledQualificationsDiv = styled.div`
display: flex;
justify-content: space-evenly;
width: 80%;
@media (width < 1000px) {
  flex-direction: column;
  align-items: center;
  }
`

const StyledQualification = styled.p`
margin: 0;
font-weight: bold;
`

const Home = () => {
  const screenSize = useScreenSize()
  return (
    <StyledContainer>
      <GreetingContainer>
        <StyledLogo src={Logo} />
        <StyledWelcome src={Welcome} />

      </GreetingContainer>

          <HeadingContainer>
        <Heading>Hi, I'm Sarah</Heading>
      </HeadingContainer>
      <StyledAboutMeDiv>
      <StyledQualificationsDiv>
        <StyledQualification>BS in Exercise Physiology</StyledQualification>
        <StyledQualification>ACE Certified Personal Trainer</StyledQualification>
        <StyledQualification>Certified Yoga Instructor</StyledQualification>
      </StyledQualificationsDiv>
      <StyledBioDiv>
        <p>With over 3 years of experience in fitness training, I am dedicated to helping clients improve their overall quality of life through injury prevention and recovery, posture correction, joint strengthening and alignment, and weight loss. My training programs incorporate a variety of exercises and techniques to ensure a functional approach to fitness. I work closely with each client to develop personalized plans that are both effective and enjoyable. Let's work together to improve your health and transform your life!</p>
      </StyledBioDiv>
      </StyledAboutMeDiv>

    </StyledContainer>
  )
}
export default Home
