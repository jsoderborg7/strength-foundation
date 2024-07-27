import styled from 'styled-components'

const CardContainer = styled.div`
  border: 3px solid #22466F;
  border-radius: 5px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff6ea;
`

const PlanCard = ({ planName, planDescription, priceInCents }) => {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const prettyMoney = USDollar.format(priceInCents / 100)
  return (
    <CardContainer>
      <h2>{planName}</h2>
      <p>{planDescription}</p>
      <p>{prettyMoney}</p>
    </CardContainer>
  )
}
export default PlanCard
