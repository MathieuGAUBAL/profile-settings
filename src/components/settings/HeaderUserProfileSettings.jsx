import React from "react";
import Container from "../Container";
import ImageProfil from '../ImageProfil';
import Button from "../Button";


const HeaderUserProfileSettings = ({handleChangeForm, handleClickUpdateInfos, handleClickNavigateToSettings, local}) => {

    return (
        <Container styleAdd={{
            backgroundColor: '#97ccb6'
        }} >
            <Container styleAdd={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                <Button style={{ backgroundColor: '#97ccb6', border: '1px solid #fff', padding: '10px 25px 10px 25px', borderRadius: '5px', color: '#fff', fontSize: '1rem' }} value='Back' func={handleClickNavigateToSettings}/>
                <Button style={{ backgroundColor: '#97ccb6', border: 'none', padding: '3px 15px 3px 15px', borderRadius: '5px', color: '#e91e63',fontSize: '1rem'}} value={'Save'} func={handleClickUpdateInfos}/>
            </Container>
            <Container styleAdd={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ImageProfil picture={local.picture} />
                <form className='settings-head'>
                    <label>
                        picture's url :{' '}
                        <textarea type='text' value={local.picture.url} name={'picture'} onChange={handleChangeForm}></textarea>
                    </label>

                    <label>
                        Name :{' '}
                        <input type='text' value={local.name} name={'name'} onChange={handleChangeForm} />
                    </label>

                    <label>
                        description :{' '}
                        <input type='text' value={local.sub} name={'sub'} onChange={handleChangeForm} />
                    </label>
                </form>
            </Container>
        </Container>
    )
}

export default HeaderUserProfileSettings;