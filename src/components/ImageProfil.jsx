import React from "react";

const ImageProfil = ({picture}) => {
    const avatarDefault = 'https://static.wixstatic.com/media/c1c0e6_1be1c26ca6c8485fbf8ee78c153fdb3d~mv2.gif/v1/fill/w_76,h_76,q_90/c1c0e6_1be1c26ca6c8485fbf8ee78c153fdb3d~mv2.gif'

    const { url, alt } = picture;
    const circleSize = 130;
    const styleCircle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        borderRadius: "50%"
    }

    const styleCirclePicture = {
        width: `${circleSize - 10}px`,
        height: `${circleSize - 10}px`,
        borderRadius: "50%",
        objectFit: 'cover'
    }

    return (
        <div style={styleCircle}>
            <img
                style={styleCirclePicture}
                src={url || avatarDefault}
                alt={alt}
            />
        </div >
    )
}

export default ImageProfil;