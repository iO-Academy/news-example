import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'

function App() {
  return (
    <>
      <Header title='Academy News' />
      <NewsFeed />
      <Footer
        textLeft='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio cupiditate a, velit officiis inventore labore non obcaecati vel nobis perferendis at blanditiis fugiat tempora, numquam ullam. Ex vel recusandae libero!'
        textRight='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio cupiditate a, velit officiis inventore labore non obcaecati vel nobis perferendis at blanditiis fugiat tempora, numquam ullam. Ex vel recusandae libero!'
      />
    </>
  )
}

export default App
