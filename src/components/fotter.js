/** @jsx jsx */
import {  jsx } from "theme-ui"

import React from 'react'
import { Flex } from 'theme-ui'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
 


const footer={
    position:'relative',
    bottom:'0%',
    zIndex:'1',
    fontFamily:'Fira Sans',
    justifyContent:[null,null,'space-around','space-around','space-around'], 
    alignItems:'center',
    backgroundColor:"#222222",
    color:'white',
     height:['25vh','25vh','15vh','15vh','15vh'],
     flexDirection:['column','column','row','row','row']
     
}
const link={
    textDecoration:'none',
    color:'white',
    display:['none','none','none','block','block']
}
const symbol={
    display:['block','block','block','none','none'],
    color:'grey'
}


const Footer = ()=>{
    return(
        <footer>
           <Flex sx={footer}>
               <Flex sx={{justifyContent:'space-between',}}> <h6>DESIGNED AND DEVELOPED BY &nbsp; &nbsp; <span sx={{color: '#CB0F22',fontSize:'12px'}}>NET</span> <span sx={{color:'#006BAD',fontSize:'12px'}}>ART</span></h6></Flex>
            <Flex sx={{justifyContent:'space-between', alignItems:'center',width:'50%'}}> 
              <h6><a sx={link} href='https://www.facebook.com/netart.io' target="_blank">FACEBOOK </a><  FaFacebookF sx={symbol}/></h6>
               <h6><a sx={link} href='https://twitter.com/NetArt_India' target="_blank">TWITTER </a><FaTwitter sx={symbol}/></h6>
               <h6><a sx={link} href='https://www.linkedin.com/company/netart-india/' target="_blank">LINKDIN</a><FaLinkedin sx={symbol}/></h6>
               <h6><a sx={link}   href='https://www.instagram.com/_netart_/?hl=en' target="_blank">INSTAGRAM </a><FaInstagram sx={symbol}/></h6>
            </Flex>
            <Flex sx={{width:'10%', }}>
            <hr sx={{display:['none','none','none','block','block'],height:'0.5px',backgroundColor:'white',width:'70%',marginRight:'0px'}}></hr><span sx={{display:['none','none','block','block','block']}}>2021</span>
            </Flex>
                      
           </Flex>
        </footer>
        
    )
}
export default Footer


//<hr sx={{display:['none','none','none','none','inline'],height:'1px',backgroundColor:'white',width:'90%'}}></hr>
//[null,null,'10%','10%','10%']