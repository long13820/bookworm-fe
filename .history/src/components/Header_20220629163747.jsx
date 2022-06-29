import React from 'react'
import {Container, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainerainer to='/'>
                        <Navbar.Brand>BOOKWORM</Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    </>
  )
}

export default Header