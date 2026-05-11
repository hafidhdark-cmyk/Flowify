import DashboardLayout from '../components/DashboardLayout'

const products = [
  ['Ribbed cotton tee', 'Clothing', '112 units', 'Active'],
  ['Velvet bucket hat', 'Accessories', '48 units', 'Active'],
  ['Structured tote bag', 'Bags', '33 units', 'Low stock'],
  ['Weekly planner', 'Stationery', '86 units', 'Active'],
]

export default function Products() {
  return (
    <DashboardLayout title="Products">
      <section className="page-panel">
        <div className="panel-heading">
          <h2>Product list</h2>
          <button type="button">Add product</button>
        </div>
        <div className="data-table">
          {products.map((product) => (
            <div className="data-row" key={product[0]}>
              {product.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  )
}