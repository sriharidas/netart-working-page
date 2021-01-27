/** @jsx jsx */
import { jsx, } from "theme-ui"

const FooterStyle = {
    ml: [null, "0", null, null, '7%'],
    pt: [null, "70px", "70px", "80px", '0'],
    padding: "0 30px",
    position: "relative",
    overflowX: "hidden",
    bg: "black",
    height: [null, "20vh", "14vh"],
    width: "100%",
    left: 0, bottom: 0, zIndex: 50
}
const Footer = () => {
    return (
        <div sx={FooterStyle}>
            Footer
        </div >
    )
}
export default Footer