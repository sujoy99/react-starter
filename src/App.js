import React from 'react'

import { Container, Row } from 'react-bootstrap';

import Header from './components/Header';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Book from './components/Book';
import BookAdd from './components/BookAdd';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router >
      <Header />
      
      <Container>
        <Row>
          <Routes>
            <Route exact path='/' element={< Welcome />}></Route>
            <Route exact path='/add' element={< BookAdd />}></Route>
            <Route exact path='/list' element={< Book />}></Route>
          </Routes>
        </Row>
      </Container>
      
      <Footer />
    </Router>
  );
}

export default App;
