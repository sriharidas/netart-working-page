import Rect from 'react'
/** @jsx jsx */
import{jsx,Styled} from 'theme-ui'
import './../../gatsby-plugin-theme-ui/index'
import {Flex} from 'theme-ui'
import {Helmet} from 'react-helmet'


const ImgFlex_container = {
    width: '100%',
    height: ['ato','auto','auto','auto','100vh'],
    background: 'ptimary',
    color: 'light'
}
const ImgFlex_header = {
    width: '90%',
    height: '20%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'center'
}
const ImgFlex_main = {
    width: '90%',
    height: ['50%','50%','auto','auto','50%'],
    margin:'10px auto',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
}
const ImgFlex_Grid = {
    width: ['100%','100%','50%','30%','33%'],
    margin: ['10px','10px','auto']

}
const ImgFlex_icon = {
    width: '40px'
}
const ImgFlex_subtitle = {
    paddingLeft : '40px',
    width: ['100%','95%','90%','80%','80%']
}
const ThreeImageFlex = (ImgFlex_data) => (
<div>
    <Helmet>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Helmet>
 <div sx={ImgFlex_container}>
        <div sx={ImgFlex_header}>
            <p ><hr sx={{width:'20px',height:'auto', display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',textAlign:'center',marginRight:'6px', display:'inline-block'}}/> Service Area </p>
            <Styled.h1>Services & Portfolio</Styled.h1>
        </div>
        
        <Flex sx={ImgFlex_main}>
            {
            ImgFlex_data['data'].map(data => {
                    console.log(data['icon'],data['heading'],data['content'])
                    return (<div sx={ImgFlex_Grid}>
                        <Flex>
                            <div sx={ImgFlex_icon}><i  class= {"fa "+ data['icon']+ ' fa-lg'} aria-hidden="true"></i></div>
                            <div sx={{fontWeight:'700',textTransform:'capitalize', fontSize:'19px'}}>{data['heading']}</div>
                        </Flex>
                        <div>
                            <div>
                                <p sx={ImgFlex_subtitle}>   
                                    {data['content']}
                                </p> 
                            </div>
                        </div>
                    </div>)
            })
        }
        </Flex>
    </div>
    </div>
   
)

export default ThreeImageFlex

/*
 *<Flex sx={ImgFlex_main}>
            <div sx={ImgFlex_Grid}>
                <Flex>
                    <div sx={ImgFlex_icon}><i  class="fa fa-line-chart" aria-hidden="true"></i></div>
                    <div>Data Analysis</div>
                </Flex>
                <div>
                    <div>
                        <p sx={ImgFlex_subtitle}>   
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> 
                    </div>
                </div>
            </div>

            <div sx={ImgFlex_Grid}>
                <Flex>
                    <div sx={ImgFlex_icon}><i class="fa fa-code" aria-hidden="true"></i></div>
                    <div>Web Optimize</div>
                </Flex>
                <div>
                    <div>
                        <p sx={ImgFlex_subtitle}>   
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p> 
                    </div>
                </div>
            </div>

            <div sx={ImgFlex_Grid}>
                <Flex>
                    <div sx={ImgFlex_icon}><i class="fa fa-comments-o" aria-hidden="true"></i></div>
                    <div>Content Marketing</div>
                </Flex>
                <div>
                    <div>
                        <p sx={ImgFlex_subtitle}>   
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> 
                    </div>
                </div>
            </div>

            <div sx={ImgFlex_Grid}>
                <Flex>
                    <div sx={ImgFlex_icon}><i class="fa fa-file-text" aria-hidden="true"></i></div>
                    <div>Email Marketing</div>
                </Flex>
                <div>
                    <div>
                        <p sx={ImgFlex_subtitle}>   
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p> 
                    </div>
                </div>
            </div>

            <div sx={ImgFlex_Grid}>
                <Flex>
                    <div sx={ImgFlex_icon}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    <div>product Reasearch</div>
                </Flex>
                <div>
                    <div>
                        <p sx={ImgFlex_subtitle}>   
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p> 
                    </div>
                </div>
            </div>

            <div sx={ImgFlex_Grid}>
                <Flex >
                    <div sx={ImgFlex_icon}><i class="fa fa-server" aria-hidden="true"></i></div>
                    <div>App Design</div>
                </Flex>
                <div>
                    <div>
                        <p sx={ImgFlex_subtitle}>   
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p> 
                    </div>
                </div>
            </div>

        </Flex>
 */