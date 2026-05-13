import DashboardLayout from '../components/DashboardLayout'
import {
  Shirt,
  Footprints,
  ShoppingBag,
  ShoppingCart,
  CalendarDays,
  Glasses,
  ChevronRight,
} from 'lucide-react'



const stats = [
  { value: '741', label: 'New items' },
  { value: '123', label: 'New orders' },
  { value: '12', label: 'Refunds' },
  { value: '1', label: 'Message' },
  { value: '4', label: 'Groups' },
]

const sales = [
  { label: 'Confirmed', height: 58, tone: 'light' },
  { label: 'Packed', height: 76, tone: 'medium' },
  { label: 'Refunded', height: 30, tone: 'pale' },
  { label: 'Shipped', height: 92, tone: 'dark' },
]

const categories = [
  { label: 'Clothing', icon: Shirt },
  { label: 'Footwear', icon: Footprints },
  { label: 'Bags', icon: ShoppingBag },
  { label: 'Orders', icon: ShoppingCart },
  { label: 'Schedule', icon: CalendarDays },
  { label: 'Eyewear', icon: Glasses },
]


const stores = [
  ['Manchester, UK', '23 employees', '308 items', '2 orders'],
  ['Yorkshire, UK', '11 employees', '291 items', '15 orders'],
  ['Hull, UK', '5 employees', '41 items', '11 orders'],
  ['Leicester, UK', '16 employees', '261 items', '8 orders'],
]

export default function Home() {
  return (
    <DashboardLayout title="Recent activity">
      <section className="stats-row" aria-label="Inventory summary">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>Qty</span>
            <p>{stat.label}</p>
          </article>
        ))}
        <button type="button" className="round-next" aria-label="Next summary">
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </section>

      <section className="dashboard-grid">
        <article className="panel sales-panel">
          <h2>Sales</h2>
          <div className="chart">
            <div className="chart-lines" aria-hidden="true" />
            {sales.map((item) => (
              <div className="chart-column" key={item.label}>
                <span className={`bar bar-${item.tone}`} style={{ height: `${item.height}%` }} />
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel category-panel">
          <div className="panel-heading">
            <h2>Top item categories</h2>
            <button type="button">View all</button>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <button type="button" key={category.label} aria-label={category.label}>
                <category.icon size={24} strokeWidth={2.5} />
              </button>
            ))}

          </div>
          
        </article>

        <article className="panel stock-panel">
          <h2>Stock numbers</h2>
          <dl>
            <div>
              <dt>Low stock items</dt>
              <dd>12</dd>
            </div>
            <div>
              <dt>Item categories</dt>
              <dd>6</dd>
            </div>
            <div>
              <dt>Refunded items</dt>
              <dd>1</dd>
            </div>
          </dl>
        </article>

        <article className="panel stores-panel">
          <div className="panel-heading">
            <h2>Stores list</h2>
            <button type="button">View all</button>
          </div>
          <div className="stores-table">
            {stores.map((store) => (
              <div className="store-row" key={store[0]}>
                {store.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </article>
      </section>
    </DashboardLayout>
  )
}