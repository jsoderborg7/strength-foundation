import { useQuery, gql } from '@apollo/client'
import PlanCard from './planCard'
import styled from 'styled-components'
import { PopupButton } from "react-calendly";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  padding: 5%;

`
const PlansDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 5%;
`
const HeadingContainer = styled.div`
width: 100%;
background-color: #fff6ea;
`
const Heading = styled.h2`
font-family: "Salsa", cursive;
font-size: 40px;
text-align: center;
@media (width < 1000px) {
  font-size: 30px;
  line-height: 1.2;
}
`
const ButtonContainer = styled.div`
width: 100%;
background-color: #fff6ea;
display: flex;
justify-content: center;
padding: 5% 0;
margin-bottom: -5%;
`
const StyledButton = styled(PopupButton)`
padding: 20px 50px;
font-family: "Salsa", cursive;
font-weight: 500;
font-size: 30px;
color: #fff6ea;
background-color: #F8793B;
border: 3px solid #F8793B;
border-radius: 5px;
cursor: pointer;
`
const GET_PLANS = gql`
  query Plans {
    plans {
      id
      planId
      planName
      option1
      option2
      option3
      priceOption1
      priceOption2
      priceOption3
    }
  }
`

const Plans = () => {
  const { loading, error, data } = useQuery(GET_PLANS)
  const plans = data && data.plans.slice().sort((a, b) => a.planId - b.planId)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <PlansDiv>
      <HeadingContainer>
      <Heading>Let's work together!</Heading>
      </HeadingContainer>
      <Container>
        {plans.map(({ id, planName, option1, option2, option3, priceOption1, priceOption2, priceOption3 }) => (
          <PlanCard
            key={id}
            planName={planName}
            option1={option1}
            option2={option2}
            option3={option3}
            priceOption1={priceOption1}
            priceOption2={priceOption2}
            priceOption3={priceOption3}
          />
        ))}
      </Container>
      <ButtonContainer>
      <StyledButton
        url="https://calendly.com/jsoderborg7"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Schedule Now!"
      />
      </ButtonContainer>
    </PlansDiv>
  )
}
export default Plans
