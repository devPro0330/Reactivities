import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
  openForm: () => void;
}

function NavBar(props: Props) {
  const {openForm} = props;
  return (
    <Menu inverted fixed='top' >
      <Container>
        <Menu.Item header>
          <img src="assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive onClick={openForm} content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar;
