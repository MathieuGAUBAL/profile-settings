import React from "react";
import Container from "../Container";
import Button from "../Button";
import { CgProfile } from 'react-icons/cg';
import { MdPhotoLibrary } from 'react-icons/md';
import { BsChat } from 'react-icons/bs';

const BodyUserProfile = () => {
    const styleButtonSelection = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        border: "1px solid rgb(228,228,228)",
        padding: '15px',
        fontSize: '1rem',
        color: '#a5a5a5'
      }

    return(
        <Container styleAdd={{
            display: 'flex',
            backgroundColor: 'pink'
          }} >
            <Button styleSpan={{ marginRight: '10px' }} style={styleButtonSelection} value={'Profile'}>
              <CgProfile size={'1.5rem'} color={'#97ccb6'} />
            </Button>
            <Button styleSpan={{ marginRight: '10px' }} style={styleButtonSelection} value={'Photos'}>
              <MdPhotoLibrary size={'1.5rem'} color={'#97ccb6'} />
            </Button>
            <Button styleSpan={{ marginRight: '10px' }} style={styleButtonSelection} value={'Chat'}>
              <BsChat size={'1.5rem'} color={'#97ccb6'} />
            </Button>
          </Container>
    )
}

export default BodyUserProfile;