/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { Flex } from 'theme-ui'
// http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038
const Banner = ({ heading, imgUrl, desc, btnText }) => {
    return (
        <Flex sx={{ backgroundImage: `url(${imgUrl})`, height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', }}>
            <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '0.5', marginLeft: '100px', }}>
                <div sx={{ lineHeight: '70px' }}>
                    <h1 sx={{ fontSize: '70px' }}>{heading}</h1>
                </div>
                <p sx={{ fontSize: '18px' }}>{desc}</p>
                <p>SOme descrioption</p>
                <button sx={{ width: '30%', padding: '10px', borderRadius: '20px', backgroundImage: 'linear-gradient(#D60E22 #900C19)' }}>{btnText}</button>
            </Flex>
        </Flex>

    )
}
export default Banner

    // < Flex sx = {{ backgroundImage: `url(${imgUrl})`, height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', }}>
    //     <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: '0.5', marginLeft: '100px', }}>
    //         <div sx={{ lineHeight: '70px' }}>
    //             <h1 sx={{ fontSize: '70px' }}>We Create Beautiful Things That You Will Fall In Love With</h1>
    //         </div>
    //         <p sx={{ fontSize: '18px' }}>Holisticly cultivate error-free experiences vis-a-vis maintainable experiences. Energistically implement. Dramatically create cost effective vortals for market positioning.</p>
    //         <button sx={{ width: '30%', padding: '10px', borderRadius: '20px', backgroundImage: 'linear-gradient(#D60E22 #900C19)' }}>DICOVER THE AGENCY</button>

    //     </Flex>
    //     </Flex >