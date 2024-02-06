import Content1 from "./grid/Content1"
import Content2 from "./grid/Content2"
import Content3 from "./grid/Content3"
import Footer from "./grid/Footer"
import Header from "./grid/Header"
import Sidebar from "./grid/Sidebar"

const MyGrid1 = () => {
  return (
    <>
      <br />
      <hr />
      <div className="grid2">
        <Header/>
        <Sidebar/>
        <Content1/>
        <Content2/>
        <Content3/>
        <Footer/>
      </div>
    </>
  )
}

export default MyGrid1