const PlanCard = ({ planName, priceInCents }) => {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const prettyMoney = USDollar.format(priceInCents / 100)
  return (
    <div>
      <h2>{planName}</h2>
      <p>{prettyMoney}</p>
    </div>
  )
}
export default PlanCard
