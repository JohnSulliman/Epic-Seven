import React from 'react'

//Components
import {Nav, Navbar, NavDropdown, Container, Row, Col} from 'react-bootstrap'
import {Switch, Route} from 'react-router-dom'
import {ReadAll} from './Components/ReadAll/ReadAll'
import {ReadSingle} from './Components/ReadSingle/ReadSingle'
import {Create} from './Components/Create/Create'
import {DeleteAll} from './Components/DeleteAll/DeleteAll'
import {About} from './Components/About/About'


//Assets
import Logo from './Img/Logo.png'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/App.scss'


function App() {
  

  return (
    <>
      <Navbar className='dropdownMenu' >
        <NavDropdown title='Menu'>
            <NavDropdown.Item eventKey="1" href='/'>Início</NavDropdown.Item>
            <NavDropdown.Item eventKey="2" href='/create'>Criar</NavDropdown.Item>
            <NavDropdown.Item eventKey="3" href='/delete-all'>Deletar Tudo</NavDropdown.Item>
            <NavDropdown.Item eventKey="4" href='/about'>Sobre</NavDropdown.Item>
        </NavDropdown>
      </Navbar>

        <div className='logoBar' >
          <img className='epic-seven-logo' src={Logo} alt='epic-seven-logo' />
        </div>

      <Navbar className='menu justify-content-center' expand='sm'>
        <Nav>
          <Nav.Link id='link-style' href='/'>Início</Nav.Link>
          <Nav.Link id='link-style' href='/create'>Criar</Nav.Link>
          <Nav.Link id='link-style' href='/delete-all'>Deletar Tudo</Nav.Link>
          <Nav.Link id='link-style' href='/about'>Sobre</Nav.Link>
        </Nav>
      </Navbar>

      <Container className='app-container'>
        <Row>
          <Col>
            <Switch>
              <Route path='/' exact={true} component={ReadAll}></Route>
              <Route path='/create' component={Create}></Route>
              <Route path='/delete-all' component={DeleteAll}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/view/:id' component={ReadSingle}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;