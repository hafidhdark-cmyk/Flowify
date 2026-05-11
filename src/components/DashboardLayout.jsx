import {
  Search,
  Plus,
  Bell,
  Settings,
  User,
} from 'lucide-react'
import Sidebar from './Sidebar'

export default function DashboardLayout({ children, title = 'Recent activity' }) {
  return (
    <div className="dashboard-shell">
      <Sidebar />

      <main className="dashboard-main">
        <header className="topbar">
          <label className="search-box">
            <Search size={16} strokeWidth={2.3} />
            <input type="search" placeholder="Search" />
          </label>

          <div className="topbar-actions">
            <button type="button" aria-label="Add">
              <Plus size={16} strokeWidth={2.3} />
            </button>
            <button type="button" aria-label="Notifications">
              <Bell size={16} strokeWidth={2.3} />
            </button>
            <button type="button" aria-label="Settings">
              <Settings size={16} strokeWidth={2.3} />
            </button>
            <button type="button" className="profile-button" aria-label="Profile">
              <User size={17} strokeWidth={2.3} />
            </button>
          </div>
        </header>

        <h1 className="page-title">{title}</h1>
        {children}
      </main>
    </div>
  )
}