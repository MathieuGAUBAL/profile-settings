import React from "react";
import Container from "../Container";
import ImageProfil from '../ImageProfil';
import { GoSettings } from 'react-icons/go';
import Button from "../Button";
import Text from "../Text";


const HeaderUserProfile = ({handleClickNavigateToSettings, infos }) => {
    return(
        <Container styleAdd={{
            backgroundColor: '#97ccb6'
          }} >
            <Container styleAdd={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
              <Button style={{ backgroundColor: '#97ccb6', border: '1px solid #fff', padding: '10px 25px 10px 25px', borderRadius: '5px', color: '#fff', fontSize: '1rem' }} value='Back' />
              <Button style={{ backgroundColor: '#97ccb6', border: 'none', borderRadius: '5px', color: '#fff' }} value={<GoSettings size={'2rem'} color={'#fff'} />} func={handleClickNavigateToSettings}/>
            </Container>
            <Container styleAdd={{ display: 'flex', justifyContent: 'center' }}>
              <ImageProfil picture={infos?.picture}/>
            </Container>
            <Container styleAdd={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0 20px 0' }}>
              <Text style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '500' }} text={`${infos?.name}`} />
              <Text style={{ color: '#fff', fontSize: '1rem', fontWeight: '500' }} text={`"${infos?.sub}"`} />
            </Container>
          </Container>
    )
}

export default HeaderUserProfile;