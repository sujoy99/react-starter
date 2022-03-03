import React, {useEffect, useState} from 'react';

import {Container} from 'react-bootstrap'

import styled from 'styled-components'

const Jumbotron = styled.div`
background: #1a0000;
color: white;
width: 80%;
margin: 10px auto;
border-radius: 5px;
padding: 10px;

& h1{
  display: block;
  width: 100%;
  float: right;
  text-align: center;
  font-size: 22px;
}

`;




const Welcome = () => {

  const [tags, setTags] = useState('')

  useEffect(() => {
    console.log("before", tags)

    setTags("hi")

    console.log(tags)

  })

    return (
        <>
            <Jumbotron>
            <h1>Welcome To Bookshop</h1>
            <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Jumbotron>
            {/* <Container className="bg-dark text-white" style={{marginTop:'10px'}} >
                <h1>Welcome To Bookshop</h1>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>

            </Container>; */}
        </>
    );
}

export default Welcome;