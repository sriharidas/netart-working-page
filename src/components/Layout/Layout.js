/** @jsx jsx */
import { jsx, } from "theme-ui"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"


const ChildStyle = {
    ml: [null, "0", null, null, '7%'],
    pt: [null, "70px", "70px", "80px", "20px"],
}
const Layout = ({ children }) => {
    return (
        <div sx={{ overflow: "hidden", position: 'relative' }}>
            <Header />
            <div sx={ChildStyle}>
                {children}
            </div>
            <Footer />
        </div >
    )
}
export default Layout