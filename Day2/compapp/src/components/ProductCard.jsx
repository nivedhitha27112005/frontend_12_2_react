const ProductCard = (props) => {
  return (
    <>
      <div className="product-card">
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        <p>Category: {props.category}</p>
        <p>Availability: {props.available ? 'In stock' : 'Out of stock'}</p>
      </div>
    </>
  )
}

export default ProductCard