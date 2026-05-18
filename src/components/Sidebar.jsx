import { NavLink } from 'react-router'
import {
  House,
  Package,
  Grid2x2,
  Store,
  Wallet,
  Settings,
  Plus,
  LogOut,
} from 'lucide-react'


const navItems = [
  { label: 'Home', path: '/home', icon: House },
  { label: 'Products', path: '/products', icon: Package },
  { label: 'Categories', path: '/categories', icon: Grid2x2 },
  { label: 'Stores', path: '/stores', icon: Store },
  { label: 'Finances', path: '/finances', icon: Wallet },
  { label: 'Settings', path: '/settings', icon: Settings },
]



export default function Sidebar({ onAddProduct }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav" aria-label="Dashboard navigation">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className="sidebar-link">
            <item.icon size={15} strokeWidth={2.3} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-actions">
        <button type="button" className="sidebar-link action-link sidebar-action-button" onClick={onAddProduct}>
          <Plus size={15} strokeWidth={2.3} />
          <span>Add product</span>
        </button>
        <NavLink to="/" className="sidebar-link action-link">
          <LogOut size={15} strokeWidth={2.3} />
          <span>Log out</span>
        </NavLink>
      </div>
    </aside>
  )
}
