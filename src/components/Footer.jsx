import React from 'react'
import Fimage from './img/Flight.jpg'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { RightOverlayPanel } from '../Components'
const Footer = () => {
  return (
    <div style={{
      backgroundColor: 'red',
      height: '70px',
      display:'flex',
      flexDirection:'column'
    }}>
      <label>follow us on</label><stack style={{justifyContents:'space-between'}}><Instagram style={{ color: 'black' }}></Instagram>
      <Facebook></Facebook>
      <Twitter></Twitter></stack>
    </div>
  )
}

export default Footer