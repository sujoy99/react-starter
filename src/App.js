import React from 'react'

import { Container, Row } from 'react-bootstrap';

import Header from './components/Header';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Book from './components/Book';
import BookAdd from './components/BookAdd';
import Form from './components/Form';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TagsInput from './components/TagsInput';
import Tag from './components/Tag';
import TagInput from './components/TagInput';
import UserList from './components/UserList';

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
            <Route exact path='/form' element={< Form />}></Route>
            <Route exact path='/tag' element={<TagInput />}></Route>
            <Route exact path='/users' element={<UserList />}></Route>
          </Routes>
        </Row>
      </Container>
      
      <Footer />
    </Router>
  );
}

export default App;
