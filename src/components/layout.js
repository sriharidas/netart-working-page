import React from 'react'
import Footer from './fotter'


const Layout = (props)=>{
 return (
     <div>
         {props.children}
         <Footer/>
     </div>
 )
} 
export default Layout