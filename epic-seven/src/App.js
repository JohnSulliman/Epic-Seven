import React from 'react';

//Components
import {Nav, Navbar, NavDropdown, Container, Row, Col} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import {Create} from './Components/Create/Create';
import {ReadAll} from './Components/ReadAll/ReadAll';
import {ReadSingle} from './Components/ReadSingle/ReadSingle';
import {Update} from './Components/Update/Update';
import {DeleteAll} from './Components/DeleteAll/DeleteAll';
import {DeleteSingle} from './Components/DeleteSingle/DeleteSingle';
import {About} from './Components/About/About';


//Assets
import Logo from './Img/Logo.png';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss';


function App() {
  
  return (
    <>
      <Navbar className='dropdownMenu'>
        <NavDropdown title='☰'>
            <NavDropdown.Item eventKey="1" href='/'>Início</NavDropdown.Item>
            <NavDropdown.Item eventKey="2" href='/create'>Criar</NavDropdown.Item>
            <NavDropdown.Item eventKey="3" href='/delete-all'>Deletar Tudo</NavDropdown.Item>
            <NavDropdown.Item eventKey="4" href='/about'>Sobre</NavDropdown.Item>
        </NavDropdown>
      </Navbar>

        <div className='logoBar'>
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
              <Route path='/' exact={true} component={ReadAll} />
              <Route path='/create' component={Create} />
              <Route path='/view/:id' component={ReadSingle} />
              <Route path='/update/:id' component={Update} />
              <Route path='/delete-all' component={DeleteAll} />
              <Route path='/delete/:id' component={DeleteSingle} />
              <Route path='/about' component={About} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;