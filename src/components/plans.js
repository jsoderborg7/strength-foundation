import { useQuery, gql } from '@apollo/client'
import PlanCard from './planCard'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
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
    <div>
      <h1>Plans</h1>
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
    </div>
  )
}
export default Plans
