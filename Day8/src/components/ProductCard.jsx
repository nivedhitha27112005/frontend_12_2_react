const ProductCard = ({ name, price }) => {
  return (
    <>
      <article className="rounded-lg border border-[#e2e8f0] bg-white p-4">
        <p className="m-0 text-sm text-[#64748b]">Product</p>
        <h2 className="mb-3 mt-1 text-lg font-semibold">{name}</h2>
        <p className="m-0 font-bold text-[#0f766e]">₹{price.toLocaleString('en-IN')}</p>
      </article>
    </>
  )
}

export default ProductCard
