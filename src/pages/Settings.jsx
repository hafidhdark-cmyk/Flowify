import DashboardLayout from '../components/DashboardLayout'

export default function Settings() {
  return (
    <DashboardLayout title="Settings">
      <section className="page-panel settings-list">
        <label>
          <span>Email notifications</span>
          <input type="checkbox" defaultChecked />
        </label>
        <label>
          <span>Low stock alerts</span>
          <input type="checkbox" defaultChecked />
        </label>
        <label>
          <span>Weekly finance report</span>
          <input type="checkbox" />
        </label>
      </section>
    </DashboardLayout>
  )
}