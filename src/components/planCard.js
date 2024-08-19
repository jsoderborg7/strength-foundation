import styled from 'styled-components'

const CardContainer = styled.div`
  border: 3px solid #F8793B;
  border-radius: 5px;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff6ea;
  text-align: center;
  margin: 10px;
`
const OptionContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
`
const StyledPlanName = styled.h2`
font-size: 18px;
`

const PlanCard = ({ planName, option1, option2, option3, priceOption1, priceOption2, priceOption3 }) => {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const prettyMoney = (price) =>{
    return USDollar.format(price / 100)
  }

  return (
    <CardContainer>
      <StyledPlanName>{planName}</StyledPlanName>
      <OptionContainer>
      <p>{option1}</p>
      <p>{prettyMoney(priceOption1)}</p>
      </OptionContainer>
      <OptionContainer>
      <p>{option2}</p>
      <p>{prettyMoney(priceOption2)}</p>
      </OptionContainer>
      <OptionContainer>
      <p>{option3}</p>
      <p>{prettyMoney(priceOption3)}</p>
      </OptionContainer>
    </CardContainer>
  )
}
export default PlanCard
