
import Container from "./components/Container";
import './App.css';
import { useState } from "react";
import UserProfilePage from "./components/profil/UserProfilePage";
import UserProfileSettingsPage from "./components/settings/UserProfileSettingsPage";

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

function App() {
  const [infos, setInfos] = useState(initialValues)
  const [isClickSettings, setIsClickSettings] = useState(false);



  const handleClickNavigateToSettings = () => {
    setIsClickSettings( isClickSettings => !isClickSettings);
  }


  const styleContainerProfil = {
    maxWidth: '400px',
    margin: 'auto',
  }

  return (
    <Container style={styleContainerProfil}>
      {!isClickSettings && <UserProfilePage handleClickNavigateToSettings={handleClickNavigateToSettings} infos={infos} />}
      {isClickSettings && <UserProfileSettingsPage handleClickNavigateToSettings={handleClickNavigateToSettings} infos={infos} setInfos={setInfos} />}
    </Container>
  );
}

export default App;
