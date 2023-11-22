import React from 'react'
import Top from './Top'
import * as Components from '../Components';
import Image from "./img/Flight.jpg";
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import Footer from './Footer';
import Homepage2 from './Homepage2';
const containerStyle = {
    //backgroundImage:`url(${Image})`,
     backgroundSize: 'cover',
     backgroundColor:'lightblue',
     //background:"linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)",
      backgroundPosition: 'center',
     minHeight: '55vh',
     display: 'flex',
     flexDirection: 'column',
  };
const search = {
   height:'230px',
  width:'630px',
  marginLeft:'30%',
  marginTop:'5%',
  borderRadius:'10px',
  backgroundColor:'white'
};
const explore = {
  height:"3000px",
  backgroundColor:'grey',
  backgroundSize:'cover'
}
const Homepage = () => {
  return (
    <>
     <Top />
            
    <div style={containerStyle}>
              
        </div>
        <div style={explore}>
              <Homepage2></Homepage2>
        </div>
        <Footer></Footer>
        </>
  )
}

export default Homepage