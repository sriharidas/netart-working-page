/** @jsx jsx */
import { Divider, jsx, Styled } from "theme-ui"
import Layout from "./../components/Layout/Layout"
import Banner from "../components/banner"
import WorkingProcess from './../components/ServicePage/WorkingProcess'
import Footer from "../components/Layout/Footer"
import ThreeImageFlex from "../components/ServicePage/ThreeImgFlex"
const BannerData = { heading: "Banner Heading Spread", desc: "Banner Description", btnText: "ButtomText", imgUrl: "http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038" }
const BannerData1 = [
   { heading: "Banner Heading1", desc: "Banner Description", btnText: "ButtomText", imgUrl: "http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038" },
   { heading: "Banner Heading2", desc: "Banner Description", btnText: "ButtomText", imgUrl: "http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038" },
]
const workingData = { 'data':[
   {key: 1,id: '01.',heading: 'Market Research'},
   { key: 2,id: '02.',heading: 'Design & Review' },
   { key: 3, id: '03.',heading: 'Development' },
   { key: 4,id: '04.', heading: 'Development' }
   ]
}
const ImgFlex_data = {
   'data': [
      {icon: 'fa-line-chart', heading: 'Data Analysis', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {icon: 'fa-code', heading: 'Web Optimize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {icon: 'fa-comments-o', heading: 'Content Marketing', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {icon: 'fa-file-text', heading: 'Email Marketing', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {icon: 'fa-pencil-square-o', heading: 'product Reasearch', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {icon: 'fa-server', heading: 'App Design', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
   ]
}
const IndexPage = () => (
         <Layout>
             <Banner {...BannerData} />
            <ThreeImageFlex {...ImgFlex_data}></ThreeImageFlex>
            <WorkingProcess {...workingData}></WorkingProcess>
         </Layout>
)


/*
           <WorkingProcess {...workingData}></WorkingProcess>

 <Layout>
      <Styled.h1>Hi people</Styled.h1>
      <Styled.p>Welcome to your new Gatsby site.</Styled.p>
      <Styled.p>Now go build something great.</Styled.p>
      <Banner heading="Banner Heading" desc="Banner Description" btnText="ButtomText" imgUrl="http://trendytheme.net/demo/maacuni/wp-content/uploads/2019/02/Services-v5.jpg?id=1038" />
      <Banner {...BannerData} />
      {BannerData1.map(x => <Banner {...x} />)}
     
   </Layout>
*/
export default IndexPage
