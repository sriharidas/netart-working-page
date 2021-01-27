/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from 'theme-ui'
import Logo from "../../images/Logo.png"
import { useState } from "react";
import { useEffect, } from 'react';
import { TimelineLite, gsap } from 'gsap';
import { FaWindowClose } from "react-icons/fa"


const MenuData = [
    { name: "Home", link: "/", },
    { name: "About Us", link: "/about", },
    { name: "Services", link: "/", },
    { name: "Blog", link: "/", },
    { name: "Get In Touch", link: "/", },
    { name: "All Country", link: "/", },
    { name: "Country SEO", link: "/", },
    { name: "City SEO", link: "/", },
]
const Header = () => {
    const Menu = ["M", "E", "N", "U"]
    const [nav, setNav] = useState(false);
    let tl = new TimelineLite();
    let tlMb = new TimelineLite();
    gsap.config({
        nullTargetWarn: false,
    });
    useEffect(() => {
        tl.fromTo(".HeaderSlide", 1.2, { y: 400, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, .2)
            .fromTo(".HeaderSlideClose", 1.2, { y: 0, autoAlpha: 0 }, { y: 400, autoAlpha: 0, }, .4)
        tlMb.fromTo(".HeaderSlideMB", 1.2, { x: 400, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, .2)
            .fromTo(".HeaderSlideCloseMB", 1.2, { x: 0, autoAlpha: 0 }, { x: 400, autoAlpha: 0 }, .4)
    })

    const MenuDataMB =
        <Flex sx={{ ...MenuDataFlex(nav), display: [null, "flex", null, null, "none"] }} className={nav ? "HeaderSlideMB" : "HeaderSlideCloseMB"}>
            <FaWindowClose sx={CloseStyle} onClick={() => setNav(!nav)} />
            {MenuData.map(x =>
                <Link to={x.link} sx={MenuDataStyle} >{x.name}</Link>
            )}
        </Flex>

    const MenuDataLap =
        <Flex sx={{ ...MenuDataFlex(nav), display: [null, "none", null, null, "flex"] }} className={nav ? "HeaderSlide" : "HeaderSlideClose"}>
            {MenuData.map(x =>
                <Link to={x.link} sx={MenuDataStyle}>{x.name}</Link>
            )}
        </Flex>
    return (
        <div sx={{ position: "relative" }}>
            <Flex sx={HeaderStyle}>
                {/* Logo */}
                <img src={Logo} alt="logo" sx={LogoStyle} />
                <div sx={{ height: [null, "auto", null, null, "82%"] }}>
                    {/* Menu Word */}
                    {Menu.map(x =>
                        <span sx={SpanMenu}>{x}</span>)}
                    {/* Menu Bars */}
                    <Flex sx={{ height: [null, "26px", null, null, "20%"], width: "50px", }} onClick={() => setNav(!nav)} >
                        <div sx={SpanNavDiv(nav)}>
                            <span sx={{ ...SpanBarStyle, ...Btn1(nav) }}></span>
                            <span className="span-second" sx={{ ...SpanBarStyle, opacity: [null, `${nav ? 0 : 1}`, null, null, 0], }}></span>
                            <span sx={{ ...SpanBarStyle, ...Btn3(nav) }}></span>
                        </div>
                    </Flex>
                </div>
            </Flex>
            {/* Menu Data anim for laptop */}
            {MenuDataLap}
            {/* Menu Data anim for mobile and tablet */}
            {MenuDataMB}
        </div>
    )
}
export default Header


const HeaderStyle = {
    bg: "light",
    width: [null, "100%", "100%", "100%", "7%"],
    position: "fixed",
    textAlign: "center", height: [null, "50px", "50px", "70px", "100%"],
    flexDirection: [null, "row", "row", "row", "column"],
    justifyContent: [null, "space-between", null, null, "space-around"],
    alignItems: "center",
    padding: [null, "0 20px", "0 20px", "0 20px", 0],
}

const LogoStyle = {
    width: [null, "auto", "auto", "auto", "28%"],
    height: [null, "70%", "70%", "60%", "auto"],
}

const SpanMenu = {
    display: [null, "none", "none", "none", "block"],
    fontSize: "12.5px",
    lineHeight: "1.7",
    fontWeight: "550",
    fontFamily: "spanText"
}



const SpanNavDiv = (nav) => {
    return {
        height: [null, "26px", null, null, "75px"],//65px
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: [null, "column", null, null, "row"],//row
        cursor: "pointer",
        width: [null, "28px", null, null, "10px"],
        p: [null, "0px", null, null, "20px 0 0 10px"],
        ":hover": {
            flexDirection: [null, "column", null, null, `${nav ? "row" : "column"}`],
            p: [null, "0px", null, null, `${nav ? "20px 0 0 10px" : "20px 0 0 0px"}`],
            ".span-second": {
                opacity: `${nav ? 0 : 1} `
            }
        },
        m: "0 15px"
    }
}


const SpanBarStyle = {
    border: "0.1px solid", display: "block", color: [null, "black", "black", "black", "primary"],
    mb: [null, "0", null, null, "15px"],
    width: [null, "22px", "30px",],
    transition: "0.5s ease",
}

const MenuDataStyle = {
    display: "block", color: [null, "white", "white", "#07189e", "#07189e"],
    textDecoration: "none", fontSize: [null, "16px", "20px", "50px", "70px"],
    fontFamily: "body",
    p: "12px",
    ":hover": {
        color: "white"
    },
    fontWeight: [null, "400", null, "750"]
}

const MenuDataFlex = (nav) => {
    return {
        ml: [null, "15% ", "50%", "35%", '7%'],
        mt: [null, null, null, '7%', "0"],
        height: "100%",
        width: [null, "90%", "60%", "65%", "93%"],
        position: "fixed",
        top: [null, 0, null, null, "10px"], left: "0px",
        bg: [null, "menuMb", "menuMb", "menuBlue", "menuBlue"],
        p: [null, "0px 20px 10% 20px", null, "55px 20px 10% 20px", "65px"], flexDirection: "column",
        overflowX: "hidden",
        display: `${nav ? 'flex' : 'none'} `,
        zIndex: "100",
        transform: `${nav ? ' translateY(0px)' : 'translateY(-100vh)'} `,
        overflowY: "auto",
        "::-webkit-scrollbar": {
            display: "none"
        },
        "scrollbar-width": "none",
        "-ms-overflow-style": "none",
    }
}

const Btn1 = (nav,) => {
    return {
        transform:
            [null,
                `${nav ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0deg) transform(0px,0px)'} `,
                null, null,
                `${nav ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0deg) transform(0px,0px)'} `,
            ],
    }
}


const Btn3 = (nav,) => {
    return {
        transform: [null,
            `${nav ? "rotate(-45deg) translate(4px, -6px)" : "rotate(0deg) transform(0px,0px)"} `,
            null, null,
            `${nav ? "rotate(-45deg) translate(-7px, 3px)" : "rotate(0deg) transform(0px,0px)"} `,
        ],
        opacity: [null, null, null, null, `${nav ? 1 : 0} `],
    }
}


const CloseStyle = {
    fontSize: "1.5rem", m: "0 12px 12px 12px", color: "#adadad", display: [null, "flex", null, "none",]
}
