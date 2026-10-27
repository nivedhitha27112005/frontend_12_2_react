import Student from './components/Student'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
const App = ()=>{

  return(<>
  <div>
    <div className='parent'>
      <h1 className='start'>Task1</h1>
      <Student/>
    </div>
    <div className='parent'>
      <h1 className='start'>Task2</h1>
      <Header/>
      <Content/>
      <Footer/>
    </div>
    <div className='parent'>
      <h1 className='start'>Task3</h1>
      <div className="products">
        <ProductCard name="Coffee Power" price="$9.22" category="Kitchen item" available={true} />
        <ProductCard name="Lamp" price="$45.23" category=" Home Decor" available={true} />
        <ProductCard name="Football" price="$64.00" category="Gaming" available={false} />
      </div>
    </div>
  </div>
    
    
  </>
  )
}

export default App
