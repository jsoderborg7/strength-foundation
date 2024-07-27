
import Home from './components/home'
import Plans from './components/plans'
import AboutMe from './components/aboutMe'
import styled from 'styled-components'

const PageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 65%;
margin: auto;
background-color: #fff6ea;
opacity: 95%;
@media (width < 1000px) {
  width: 80%
}
`

export default function App() {
  return (
    <PageContainer>
      <Home/>
      <Plans/>
    </PageContainer>
  )
}
