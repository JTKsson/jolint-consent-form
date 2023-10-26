import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer/'
import { Heading } from './components/Heading'
import Styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className={Styles.main}>
        <Heading />
        <MainContent />
      </div>
      <Footer />
    </>
  )
}
