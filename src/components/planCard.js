import styled from 'styled-components'
const CardContainer = styled.div`
  border: 1px solid black;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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
