import DashboardLayout from '../components/DashboardLayout'

const categories = ['Clothing', 'Accessories', 'Bags', 'Footwear', 'Stationery', 'Eyewear']

export default function Categories() {
  return (
    <DashboardLayout title="Categories">
      <section className="page-panel card-list">
        {categories.map((category, index) => (
          <article key={category}>
            <strong>{category}</strong>
            <span>{index + 4} product groups</span>
          </article>
        ))}
      </section>
    </DashboardLayout>
  )
}