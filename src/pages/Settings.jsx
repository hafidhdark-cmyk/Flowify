import { Edit2 } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'

const roles = ['Manager', 'Editor', 'Supplier', 'Seller', 'Admin', 'Finance']
const permissions = ['Customer', 'Product', 'User', 'Supplier', 'Store', 'Billing']
const access = [
  [true, true, true, true],
  [true, true, true, true],
  [true, true, false, false],
  [true, false, false, false],
  [true, false, false, false],
  [false, false, false, false],
]

export default function Settings() {
  return (
    <DashboardLayout title="Personal Settings">
      <section className="settings-profile-card">
        <dl>
          <div>
            <dt>Name*</dt>
            <dd>John Hopkins</dd>
          </div>
          <div>
            <dt>Company email*</dt>
            <dd>j.hopkins@inventor.io</dd>
          </div>
          <div>
            <dt>Company email*</dt>
            <dd>***********************</dd>
          </div>
          <div>
            <dt>Store</dt>
            <dd>Leicester, UK</dd>
          </div>
          <div>
            <dt>Store</dt>
            <dd>94-K-6764-LEI</dd>
          </div>
          <div>
            <dt>Store</dt>
            <dd>Manager</dd>
          </div>
        </dl>
        <button type="button" aria-label="Edit profile">
          <Edit2 size={16} />
        </button>
      </section>

      <section className="settings-grid">
        <article className="role-card">
          <div className="settings-card-title">
            <h2>Role</h2>
            <button type="button" aria-label="Edit role"><Edit2 size={14} /></button>
          </div>
          <div className="role-list">
            {roles.map((role, index) => (
              <label key={role}>
                <input type="checkbox" defaultChecked={index === 0} />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </article>

        <article className="permissions-card">
          <div className="settings-card-title">
            <h2>Permissions</h2>
            <button type="button" aria-label="Edit permissions"><Edit2 size={14} /></button>
          </div>
          <div className="permissions-table">
            <span />
            <b>View</b>
            <b>Edit</b>
            <b>Create</b>
            <b>Approval</b>
            {permissions.map((permission, rowIndex) => (
              <div className="permissions-row" key={permission}>
                <span>{permission}</span>
                {access[rowIndex].map((enabled, index) => (
                  <i className={enabled ? 'toggle-on' : 'toggle-off'} key={`${permission}-${index}`} />
                ))}
              </div>
            ))}
          </div>
        </article>
      </section>
    </DashboardLayout>
  )
}
