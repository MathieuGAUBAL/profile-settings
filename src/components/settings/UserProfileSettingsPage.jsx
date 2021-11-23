import React, { useEffect, useState } from 'react';
import BodyUserProfileSettings from './BodyUserProfileSettings';
import HeaderUserProfileSettings from './HeaderUserProfileSettings';

const initialValues = {
    "name": "",
    "sub": "",
    "picture": {
        "url": "",
        "alt": "ma photo de profil"
    },

    "list": [
        { 'id': 'Favorite_Food', 'theme': 'Favorite Food', 'value': "" },
        { 'id': 'Hobbies', 'theme': 'Hobbies', 'value': "" },
        { 'id': 'Likes', 'theme': 'Likes', 'value': "" },
        { 'id': 'Dislikes', 'theme': 'Dislikes', 'value': "" }
    ]

}

const UserProfileSettingsPage = ({ handleClickNavigateToSettings, infos, setInfos }) => {
    const [local, setLocal] = useState(initialValues);


    const handleChangeForm = (e) => {
        const { name, value, id } = e.target;

        if(name === 'picture'){
            setLocal({
                ...local,
                'picture': { 'url': value, 'alt': local.picture.alt },
            });
        }else if( id === 'Favorite_Food' || id === 'Hobbies' || id === 'Likes' || id=== 'Dislikes'){
            setLocal((prevstate) => ({
                ...prevstate, list: prevstate.list.map(item => {
                    if (item.id === id) {
                        return { ...item, value }
                    }
                    return item
                })
            }))
        }else{
            setLocal({
                ...local, [name]: value
            });
        }
    }

    useEffect(() => {
        setLocal(infos)
    }, [infos]);

    const handleClickUpdateInfos = () => {
        setInfos(local)
    }

    return (
        <>
            <HeaderUserProfileSettings
                handleChangeForm={handleChangeForm}
                handleClickUpdateInfos={handleClickUpdateInfos}
                handleClickNavigateToSettings={handleClickNavigateToSettings}
                local={local}
            />
            <BodyUserProfileSettings
                handleChangeForm={handleChangeForm}
                local={local}
            />
        </>
    )
}

export default UserProfileSettingsPage;