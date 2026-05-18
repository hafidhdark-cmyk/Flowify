import { ChevronDown } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'

const netSales = [28, 55, 39, 36, 40, 45, 35, 82, 75, 69, 88, 64, 58]
const grossProfit = [32, 58, 41, 38, 42, 47, 36, 78, 72, 66, 84, 62, 55]
const breakdown = Array.from({ length: 34 }, (_, index) => ({
  bottoms: 14 + ((index * 7) % 14),
  tshirts: 14 + ((index * 5) % 12),
  tops: 8 + ((index * 3) % 10),
  accessories: 22 + ((index * 9) % 20),
  jeans: 30 + ((index * 11) % 24),
}))

function MiniChart({ title, value, delta, bars }) {
  return (
    <article className="finance-metric-card">
      <h2>{title}</h2>
      <strong>{value}</strong>
      <span>{delta}</span>
      <div className="mini-chart">
        {bars.map((height, index) => (
          <i style={{ height: `${height}%` }} key={`${title}-${index}`} />
        ))}
      </div>
    </article>
  )
}

export default function Finances() {
  return (
    <DashboardLayout title="Finances">
      <div className="finance-controls">
        <button type="button" className="filter-button">
          View range
          <ChevronDown size={13} strokeWidth={2.4} />
        </button>
        <span>February 2025 - March 2025</span>
      </div>

      <section className="finance-metrics">
        <MiniChart title="Net sales" value="$4,103" delta="+21.27%" bars={netSales} />
        <MiniChart title="Gross profit" value="$3,819" delta="+14.09%" bars={grossProfit} />
        <article className="finance-metric-card finance-empty-card">
          <h2>Margin</h2>
          <p>Not enough data<br />to show the chart.</p>
        </article>
      </section>

      <section className="revenue-card">
        <h2>Revenue breakdown</h2>
        <div className="finance-legend">
          <span><i className="legend-bottoms" />Bottoms</span>
          <span><i className="legend-tshirts" />T-shirt</span>
          <span><i className="legend-tops" />Tops</span>
          <span><i className="legend-accessories" />Accessories</span>
          <span><i className="legend-jeans" />Jeans</span>
        </div>
        <div className="revenue-chart">
          {breakdown.map((day, index) => (
            <div className="revenue-stack" key={index}>
              <i className="legend-bottoms" style={{ height: `${day.bottoms}px` }} />
              <i className="legend-tshirts" style={{ height: `${day.tshirts}px` }} />
              <i className="legend-tops" style={{ height: `${day.tops}px` }} />
              <i className="legend-accessories" style={{ height: `${day.accessories}px` }} />
              <i className="legend-jeans" style={{ height: `${day.jeans}px` }} />
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  )
}
