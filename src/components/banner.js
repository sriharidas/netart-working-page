/** @jsx jsx */
import {  jsx } from "theme-ui"
import React from 'react'
import { Flex } from 'theme-ui'



const Banner = ()=>{
    return(
        <Flex sx={{backgroundImage: "url('http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038')", height:'100vh',backgroundPosition:'center',backgroundSize:'cover',}}>

           <Flex sx={{flexDirection:'column',justifyContent:'center',alignItems:'center',flex:'0.5',marginLeft:'100px',}}>
               <div sx={{lineHeight:'70px'}}>
                 <h1 sx={{fontSize:'70px'}}>We Create Beautiful Things That You Will Fall In Love With</h1>
               </div>
               <p sx={{fontSize:'18px'}}>Holisticly cultivate error-free experiences vis-a-vis maintainable experiences. Energistically implement. Dramatically create cost effective vortals for market positioning.</p>
               <button sx={{width:'30%',padding:'10px',borderRadius:'20px',backgroundImage: 'linear-gradient(#D60E22 #900C19)'}}>DICOVER THE AGENCY</button>
                
           </Flex>
        </Flex>
        
    )
}
export default Banner