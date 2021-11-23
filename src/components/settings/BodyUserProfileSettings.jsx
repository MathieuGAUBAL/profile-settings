import React from 'react';
import Container from '../Container';

const BodyUserProfileSettings = ({ handleChangeForm, local }) => {

    return (
        <Container styleAdd={{ backgroundColor:  '#f9f9f9' }}>
            <form className='settings-body'>
                {
                    local?.list?.map((theme, index) => {
                        return (
                            <label key={index}>
                                {theme.theme} :{' '}
                                <input type='text' value={theme.value} id={theme.id} name={theme.theme} onChange={handleChangeForm} />
                            </label>
                        )
                    })
                }
            </form>
        </Container>
    )
}

export default BodyUserProfileSettings;