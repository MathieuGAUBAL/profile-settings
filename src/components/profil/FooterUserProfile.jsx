import React from "react";
import Container from "../Container";
import Text from "../Text";

const FooterUserProfile = ({ infos }) => {

  const styleTextDescriptionList = {
    color: '#a5a5a5',
    fontSize: '1rem',
    fontWeight: '500',
    padding: '10px',
    width: '35%'
  }

  return (
    <Container styleAdd={{ backgroundColor: '#f9f9f9' }}>
      {
        infos.list.map((item, index) => {
          return (
            <Container style={{ display: 'flex' }} key={index}>
              <Text addStyle={{ color: '#a5a5a5a5' }} style={styleTextDescriptionList} text={item.theme} />
              <Text addStyle={{ width: '80%' }} style={styleTextDescriptionList} text={item.value} />
            </Container>
          )

        }
        )
      }
    </Container>
  )
}

export default FooterUserProfile;