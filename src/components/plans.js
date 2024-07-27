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
background-color: #EB8C28;
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
background-color: #EB8C28;
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
background-color: #22466F;
border: 3px solid #22466F;
border-radius: 5px;
cursor: pointer;
`
const GET_PLANS = gql`
  query Plans {
    plans {
      id
      planName
      description
      priceInCents
    }
  }
`

const Plans = () => {
  const { loading, error, data } = useQuery(GET_PLANS)
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <PlansDiv>
      <HeadingContainer>
      <Heading>Let's work together!</Heading>
      </HeadingContainer>
      <Container>
        {data.plans.map(({ id, planName, description, priceInCents }) => (
          <PlanCard
            key={id}
            planName={planName}
            priceInCents={priceInCents}
            planDescription={description}
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
