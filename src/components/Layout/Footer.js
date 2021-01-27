/** @jsx jsx */
import { jsx, } from "theme-ui"
import { Flex } from 'theme-ui'
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram, FaCentercode} from "react-icons/fa"

const FooterStyle = {
    ml: [null, "0", null, null, '7%'],
    pt: [null, "20px", "70px", "80px", '0'],
    padding: "0 30px",
    position: "relative",
    overflowX: "hidden",
    bg: "black",
    height: [null, "20vh", "14vh"],
    width: "100%",
    left: 0, bottom: 0, zIndex: 50,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:['column','column','row','row']
    
}
const footer={
    position:'relative',
    bottom:'0%',
    zIndex:'1',
    justifyContent:[null,null,'space-around','space-around'], 
    alignItems:'center',
    backgroundColor:"#222222",
    color:'white',
     height:['25vh','25vh','15vh','15vh'],
     flexDirection:[null,'column','column','row','row']
     
}
const link={
    textDecoration:'none',
    color:'white',
    display:[null,'none','none','none','block']
}
const symbol={
    display:[null,'block','block','block','none'],
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
        tittle:'INSTAGRAM',
    
    }
]
const Footer = () => {
    return (
        <Flex sx={FooterStyle}>
            
             <Flex sx={{justifyContent:'space-between',}}> <p sx={{color:'white'}}>DESIGNED AND DEVELOPED BY &nbsp; <span sx={{color: '#CB0F22',fontSize:'15px'}}>NET</span> <span sx={{color:'#006BAD',fontSize:'15px'}}>ART</span></p></Flex>
             <Flex sx={{justifyContent:'space-around', alignItems:'center',width:'50%'}}> 
                  
               { link_content.map(({url,tittle}) =>(
                   <a sx={link}  href={url} target="_blank">{tittle}</a>
               ))}
            
                 <FaFacebookF sx={symbol}/>
                  <FaTwitter sx={symbol}/>
                  <FaLinkedin sx={symbol}/>
                   <FaInstagram sx={symbol}/>  
                   </Flex>  
              <Flex sx={{width:'10%', marginRight:'140px',display:[null,'none','none','none','-webkit-inline-box;']}}>
              <hr sx={{display:[null,'none','none','none','block'],height:'0.5px',backgroundColor:'white',width:'70%',marginRight:'0px'}}></hr><span sx={{display:['none','none','block','block'],color:'white'}}>2021</span>
               </Flex>   
             
        </Flex >
    )
}
export default Footer