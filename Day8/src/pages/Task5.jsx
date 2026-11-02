import PageCard from '../components/PageCard.jsx'
import ProductList from '../components/ProductList.jsx'

const Task5 = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 1500 },
    { id: 4, name: 'Keyboard', price: 800 },
  ]

  return (
    <>
      <PageCard number="5" title="Products" concept="Array of objects with props">
        <ProductList products={products} />
      </PageCard>
    </>
  )
}

export default Task5
