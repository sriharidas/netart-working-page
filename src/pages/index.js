/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/Layout/Layout"
import Banner from "../components/banner"

const BannerData = { heading: "Banner Heading Spread", desc: "Banner Description", btnText: "ButtomText", imgUrl: "http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038" }
const BannerData1 = [
   { heading: "Banner Heading1", desc: "Banner Description", btnText: "ButtomText", imgUrl: "http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038" },
   { heading: "Banner Heading2", desc: "Banner Description", btnText: "ButtomText", imgUrl: "http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038" },
]

const IndexPage = () => (
   <Layout>
      <Styled.h1>Hi people</Styled.h1>
      <Styled.p>Welcome to your new Gatsby site.</Styled.p>
      <Styled.p>Now go build something great.</Styled.p>
      <Banner heading="Banner Heading" desc="Banner Description" btnText="ButtomText" imgUrl="http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038" />
      <Banner {...BannerData} />
      {BannerData1.map(x => <Banner {...x} />)}
   </Layout>



)

export default IndexPage
