import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GetStartedButton = styled.button`
background-color: #74C688;
border-radius: 5px;
border: none;
padding: 5px;
&:hover {
    background-color: #1A5396;
}
`
const StyledLink = styled(Link)`
color: white;
text-decoration: none;
font-weight: bold;
`

const Home = () => {
  return (
    <div>
      <h1>Welcome to Strength Foundation!</h1>
      <GetStartedButton>
        {' '}
        <StyledLink to='/plans'>Get Started</StyledLink>
      </GetStartedButton>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla
        facilisi morbi tempus iaculis urna id. Non enim praesent elementum
        facilisis leo vel fringilla est. Quam quisque id diam vel quam elementum
        pulvinar. Enim lobortis scelerisque fermentum dui faucibus in ornare
        quam viverra. Quam nulla porttitor massa id neque aliquam vestibulum.
        Quam pellentesque nec nam aliquam sem et tortor. Nunc non blandit massa
        enim nec dui nunc mattis enim. Nullam vehicula ipsum a arcu cursus vitae
        congue. Vitae elementum curabitur vitae nunc sed velit dignissim sodales
        ut. Morbi tristique senectus et netus. Nibh tortor id aliquet lectus
        proin nibh. Eget gravida cum sociis natoque penatibus et magnis dis
        parturient. Eu sem integer vitae justo. In hendrerit gravida rutrum
        quisque non tellus orci. Sem integer vitae justo eget magna fermentum.
        Dictum sit amet justo donec. Neque egestas congue quisque egestas diam.
        Tortor aliquam nulla facilisi cras fermentum. Et molestie ac feugiat sed
        lectus vestibulum mattis ullamcorper velit. Elementum nibh tellus
        molestie nunc non. Enim blandit volutpat maecenas volutpat blandit
        aliquam etiam erat velit. Diam vulputate ut pharetra sit amet. Rhoncus
        urna neque viverra justo nec ultrices. Dignissim cras tincidunt lobortis
        feugiat vivamus at. Ligula ullamcorper malesuada proin libero nunc
        consequat interdum varius.
      </p>
    </div>
  )
}
export default Home
