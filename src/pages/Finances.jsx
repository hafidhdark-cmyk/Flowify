import DashboardLayout from '../components/DashboardLayout'

export default function Finances() {
  return (
    <DashboardLayout title="Finances">
      <section className="page-panel finance-summary">
        <article>
          <span>Revenue</span>
          <strong>$24,880</strong>
        </article>
        <article>
          <span>Refunds</span>
          <strong>$1,240</strong>
        </article>
        <article>
          <span>Pending payouts</span>
          <strong>$7,610</strong>
        </article>
      </section>
    </DashboardLayout>
  )
}