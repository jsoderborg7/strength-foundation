import styled from 'styled-components'
import useScreenSize from '../hooks/useScreenSize'

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const GreetingContainer = styled.div`
width: 100%;
background-color: #22466F;
`
const StyledGreeting = styled.h1`
font-size: 75px;
color: #EB8C28;
font-family: "Salsa", cursive;
font-weight: 600;
margin: 0;
text-align: center;
@media (width < 1000px) {
  font-size: 60px;
  line-height: 1.2;
}
`
const HeadingContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
background-color: #EB8C28;
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

`
const StyledBioDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 40%;
@media (width < 1000px) {
  width: 80%
}

`
const StyledQualificationsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 40%;
@media (width < 1000px) {
  width: 80%
}
`

const Home = () => {
  const screenSize = useScreenSize()
console.log(screenSize)
  return (
    <StyledContainer>
      <GreetingContainer>
        <StyledGreeting>Hi! I'm Sarah</StyledGreeting>
      </GreetingContainer>
      {screenSize.width < 1000 ?
      <>
      <HeadingContainer>
                <Heading>About Me</Heading>
      </HeadingContainer>
            <StyledBioDiv>
        <p>With over 3 years of experience in fitness training, I am dedicated to helping clients improve their overall quality of life through injury prevention and recovery, posture correction, joint strengthening and alignment, and weight loss. My training programs incorporate a variety of exercises and techniques to ensure a functional approach to fitness. I work closely with each client to develop personalized plans that are both effective and enjoyable. Let's work together to improve your health and transform your life!</p>
      </StyledBioDiv>
    <HeadingContainer>
                <Heading>Qualifications</Heading>
      </HeadingContainer>
      <StyledQualificationsDiv>
        <p>BS in Exercise Physiology</p>
        <p>ACE Certified Personal Trainer</p>
        <p>Certified Yoga Instructor</p>
      </StyledQualificationsDiv>
    </>
    :
    <>
          <HeadingContainer>
        <Heading>About Me</Heading>
      <Heading>Qualifications</Heading>
      </HeadingContainer>
      <StyledAboutMeDiv>
      <StyledBioDiv>
        <p>With over 3 years of experience in fitness training, I am dedicated to helping clients improve their overall quality of life through injury prevention and recovery, posture correction, joint strengthening and alignment, and weight loss. My training programs incorporate a variety of exercises and techniques to ensure a functional approach to fitness. I work closely with each client to develop personalized plans that are both effective and enjoyable. Let's work together to improve your health and transform your life!</p>
      </StyledBioDiv>
      <StyledQualificationsDiv>
        <p>BS in Exercise Physiology</p>
        <p>ACE Certified Personal Trainer</p>
        <p>Certified Yoga Instructor</p>
      </StyledQualificationsDiv>
      </StyledAboutMeDiv>
    </>
    }

    </StyledContainer>
  )
}
export default Home
