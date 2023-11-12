import { useQuery, gql } from '@apollo/client'
import PlanCard from './components/planCard'

const GET_PLANS = gql`
  query Plans {
    plans {
      id
      planName
      priceInCents
    }
  }
`

export default function App() {
  const { loading, error, data } = useQuery(GET_PLANS)
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <div>
      {data.plans.map(({ id, planName, priceInCents }) => (
        <PlanCard key={id} planName={planName} priceInCents={priceInCents} />
      ))}
    </div>
  )
}
