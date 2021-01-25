import React from 'react'
import Banner from './banner'
import Footer from './fotter'


const Layout = (props)=>{
 return (
     <div>
         <Banner/>
         {props.children}
         <Footer/>
     </div>
 )
} 
export default Layout