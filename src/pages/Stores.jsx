import DashboardLayout from '../components/DashboardLayout'

const stores = [
  ['Manchester, UK', '23 employees', '308 items', '2 orders'],
  ['Yorkshire, UK', '11 employees', '291 items', '15 orders'],
  ['Hull, UK', '5 employees', '41 items', '11 orders'],
  ['Leicester, UK', '16 employees', '261 items', '8 orders'],
]

export default function Stores() {
  return (
    <DashboardLayout title="Stores">
      <section className="page-panel">
        <div className="panel-heading">
          <h2>Stores list</h2>
          <button type="button">View all</button>
        </div>
        <div className="data-table">
          {stores.map((store) => (
            <div className="data-row" key={store[0]}>
              {store.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  )
}