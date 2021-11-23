import React from "react";
import BodyUserProfile from "./BodyUserProfile";
import FooterUserProfile from "./FooterUserProfile";
import HeaderUserProfile from "./HeaderUserProfile";

const UserProfilePage = ({infos, handleClickNavigateToSettings}) => {
    return(
        <>
            <HeaderUserProfile infos={infos} handleClickNavigateToSettings={handleClickNavigateToSettings}/>
            <BodyUserProfile />
            <FooterUserProfile infos={infos}/>
        </>
    )
}

export default UserProfilePage;