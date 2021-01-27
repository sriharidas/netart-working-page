/** @jsx jsx */
import {  jsx } from "theme-ui"

import React from 'react'
import { Flex } from 'theme-ui'
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram} from "react-icons/fa"

 


const footer={
    position:'relative',
    bottom:'0%',
    zIndex:'1',
    justifyContent:[null,null,'space-around','space-around'], 
    alignItems:'center',
    backgroundColor:"#222222",
    color:'white',
     height:['25vh','25vh','15vh','15vh'],
     flexDirection:['column','column','row','row'],
     marginLeft: 0
}
const link={
    textDecoration:'none',
    color:'white',
    display:['none','none','none','block']
}
const symbol={
    display:['block','block','block','none'],
    color:'grey'
}

const link_content= [
    {
    url:'https://www.facebook.com/netart.io',
    tittle : 'FACEBOOK',
      },
    {
        url:'https://twitter.com/NetArt_India',
        tittle: 'TWITTER',

    },
    {
        url:'https://www.linkedin.com/company/netart-india/',
        tittle:'LINKDIN',
    },
    {
        url:'https://www.instagram.com/_netart_/?hl=en',
        tittle:'INSTAGRAM'
    }
]

const Footer = ()=>{
    return(
        <footer>
           <Flex sx={footer}>
               <Flex sx={{justifyContent:'space-between',}}> <h5>DESIGNED AND DEVELOPED BY &nbsp; &nbsp;  <span sx={{color: '#CB0F22',fontSize:'15px'}}>NET</span> <span sx={{color:'#006BAD',fontSize:'15px'}}>ART</span></h5></Flex>
            <Flex sx={{justifyContent:'space-between', alignItems:'center',width:'50%'}}> 
                  
               { link_content.map(({url,tittle}) =>(
                  <h5><a sx={link} href={url} target="_blank">{tittle}</a></h5> 
               ))}
                  <FaFacebookF sx={symbol}/>
                  <FaTwitter sx={symbol}/>
                  <FaLinkedin sx={symbol}/>
                  <FaInstagram sx={symbol}/>
            </Flex>   
            <Flex sx={{width:'10%', }}>
            <hr sx={{display:['none','none','none','block'],height:'0.5px',backgroundColor:'white',width:'70%',marginRight:'0px'}}></hr><span sx={{display:['none','none','block','block']}}>2021</span>
            </Flex>   
           </Flex>
        </footer>
    )
}
export default Footer


