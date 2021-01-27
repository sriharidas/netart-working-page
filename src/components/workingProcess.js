import React from 'react'
/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import '../gatsby-plugin-theme-ui/index'

import { Flex} from 'theme-ui'


 const wp_container = {
    width: '100%',
    height: ['auto','auto','auto','auto','fit-content'],
    margin: '0',
    background: '#333',
    color: '#fff'
}
const wp_header = {
    width: ['95%','90%'],
    margin: '0 auto',
    height: '30vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    alignContent: 'center',
    
}
const wp_layout = {
    width: '90%',
    margin: 'auto',
    height: ['auto','auto','auto','auto','auto'],
    color: 'light',
    flexWrap : 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: '25px'
}

const wp_grid = {
    width: ['100%','100%','50%','33%','25%'],
    height: '400px',
    backgroundColor: '#333',
    flexDirection: 'column',
    border: '1px solid #fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
}

const wp_grid_element_1 = {
    fontSize:'55px',
    margin: '0 auto',
    fontWeight: '700'
}
const wp_grid_element_2 = {
    fontSize:'26px',
    margin: '15px auto',
    fontWeight: '700'
}
const wp_grid_element_3 = {

    width: '90%',
    margin: '0 auto',
    textOverflow: 'hidden',
    fontWeight: '400',
    textAlign: 'center'
}
const workingData = [
    {
        key: 1,
    id: '01.',
    heading: 'Market Research'
 },
 {
    key: 2,
    id: '02.',
    heading: 'Design & Review'
 },
 {
    key: 3,
    id: '03.',
    heading: 'Development'
 },
 {
    key: 4,
    id: '04.',
    heading: 'Development'
 }
 ]
const WorkingProcess = () => (
   
        <div sx={wp_container}>
        <Flex sx={wp_header}>
              <Styled.p>only the best quality</Styled.p>
              <Styled.h1>Our Working Process</Styled.h1>  
        </Flex>
        <Flex sx={wp_layout}>
            
            {
                workingData.map(data => {
                    //console.log(data['id'],data['heading'])
                
                    return (<Flex sx={wp_grid} >
                    <p sx={wp_grid_element_1} >{data['id']}</p>
                    <p sx={wp_grid_element_2}>{data['heading']}</p>
                    <p sx={wp_grid_element_3} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Flex>)
                })
            }
            
            

        </Flex>

    </div>
    
   
)
    
export default WorkingProcess

/*
 <Flex sx={wp_layout}>
            <Flex sx={wp_grid}>
                <p sx={wp_grid_element_1}>01.</p>
                <p sx={wp_grid_element_2}>Market Research</p>
                <p sx={wp_grid_element_3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Flex>
            <Flex sx={wp_grid}>
                <p sx={wp_grid_element_1}>02.</p>
                <p sx={wp_grid_element_2}>Market Research</p>
                <p sx={wp_grid_element_3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 

            </Flex>
            <Flex sx={wp_grid}>
                <p sx={wp_grid_element_1}>03.</p>
                <p sx={wp_grid_element_2}>Market Research</p>
                <p sx={wp_grid_element_3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Flex>
            <Flex sx={wp_grid}>
                <p sx={wp_grid_element_1}>04. </p>
                <p sx={wp_grid_element_2}>Market Research</p>
                <p sx={wp_grid_element_3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Flex>

        </Flex>
 */