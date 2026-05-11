import Icon from './Icon'
import Sidebar from './Sidebar'

export default function DashboardLayout({ children, title = 'Recent activity' }) {
  return (
    <div className="dashboard-shell">
      <Sidebar />

      <main className="dashboard-main">
        <header className="topbar">
          <label className="search-box">
            <Icon name="search" size={16} />
            <input type="search" placeholder="Search" />
          </label>

          <div className="topbar-actions">
            <button type="button" aria-label="Add">
              <Icon name="plus" size={16} />
            </button>
            <button type="button" aria-label="Notifications">
              <Icon name="bell" size={16} />
            </button>
            <button type="button" aria-label="Settings">
              <Icon name="settings" size={16} />
            </button>
            <button type="button" className="profile-button" aria-label="Profile">
              <Icon name="user" size={16} />
            </button>
          </div>
        </header>

        <h1 className="page-title">{title}</h1>
        {children}
      </main>
    </div>
  )
}