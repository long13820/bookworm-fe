import React from 'react'
import {Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>BOOKWORM</Navbar.Brand>
                </LinkContainer>
                </Container>
            </Navbar>
        </header>
    </>
  )
}

export default Header