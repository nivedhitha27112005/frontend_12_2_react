import ProductCard from './ProductCard.jsx'

const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    </>
  )
}

export default ProductList
