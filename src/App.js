import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Plans from './components/plans'
import AboutMe from './components/aboutMe'
import styled from 'styled-components'

const PageContainer = styled.div``

export default function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='plans' element={<Plans />} />
          <Route path='/about' element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  )
}
