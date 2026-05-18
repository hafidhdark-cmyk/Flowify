import {
  Search,
  Plus,
  Bell,
  Settings,
  User,
} from 'lucide-react'
import Sidebar from './Sidebar'
import { NavLink } from 'react-router'
import { useAddProduct } from './AddProductContext'

export default function DashboardLayout({ children, title = 'Recent activity' }) {
  const { openAddProduct } = useAddProduct()

  return (
    <div className="dashboard-shell">
      <Sidebar onAddProduct={openAddProduct} />

        <header className="topbar">
          <div className="topbar-content">
            <NavLink to="/home" className="brand">
              Inventor.io
            </NavLink>

            <label className="search-box">
              <Search size={16} strokeWidth={2.3} />
              <input type="search" placeholder="Search" />
            </label>
          </div>

          <div className="topbar-actions">
            <button type="button" aria-label="Add" onClick={openAddProduct}>
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

        <main className="dashboard-main">
          <h1 className="page-title">{title}</h1>
          {children}
        </main>
    </div>
  )
}
