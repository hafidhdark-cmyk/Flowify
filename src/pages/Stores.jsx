import { useState } from 'react'
import { ChevronDown, Plus, Search, X } from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'
import { useAddProduct } from '../components/AddProductContext'

const stores = [
  {
    name: 'Manchester, UK',
    image: '/stores/manchester.jpg',
    employees: 23,
    items: 308,
    orders: 2,
    refunds: 1,
    topItem: 'Unisex T-shirt White',
    topCategory: 'T-shirts',
    satisfaction: '93%',
    status: 'Open',
  },
  {
    name: 'Yorkshire, UK',
    image: '/stores/yorkshire.jpg',
    employees: 11,
    items: 291,
    orders: 15,
    refunds: 0,
    topItem: 'Unisex T-Shirt Black',
    topCategory: 'Accessories',
    satisfaction: '89%',
    status: 'Open',
  },
  {
    name: 'Hull, UK',
    image: '/stores/hull.jpg',
    employees: 5,
    items: 41,
    orders: 11,
    refunds: 2,
    topItem: 'Rain Jacket Male',
    topCategory: 'Outwear',
    satisfaction: '84%',
    status: 'Open',
  },
  {
    name: 'Leicester, UK',
    image: '/stores/leicester.jpg',
    employees: 16,
    items: 261,
    orders: 8,
    refunds: 1,
    topItem: 'Denim Shorts Women',
    topCategory: 'Bottoms',
    satisfaction: '91%',
    status: 'Open',
  },
]

export default function Stores() {
  const [selectedStore, setSelectedStore] = useState(stores[0])
  const { openAddProduct } = useAddProduct()

  return (
    <DashboardLayout title="Stores">
      <section className="products-toolbar stores-toolbar" aria-label="Store tools">
        <label className="products-search">
          <Search size={15} strokeWidth={2.4} />
          <input type="search" placeholder="Search" />
        </label>
        <button type="button" className="filter-button">
          Filter by
          <ChevronDown size={13} strokeWidth={2.4} />
        </button>
        <button type="button" className="add-product-button" onClick={openAddProduct}>
          <Plus size={14} strokeWidth={2.5} />
          Add Store
        </button>
      </section>

      <section className="store-card-grid" aria-label="Stores">
        {stores.map((store) => (
          <button
            type="button"
            className={`store-card ${selectedStore.name === store.name ? 'store-card-active' : ''}`}
            key={store.name}
            onClick={() => setSelectedStore(store)}
          >
            <img src={store.image} alt={store.name} />
            <span>{store.name}</span>
          </button>
        ))}
      </section>

      <section className="store-detail-card">
        <div className="store-detail-heading">
          <h2>{selectedStore.name}</h2>
          <button type="button" aria-label="Close store details" onClick={() => setSelectedStore(stores[0])}>
            <X size={15} />
          </button>
        </div>

        <div className="store-detail-images">
          {stores.slice(0, 3).map((store) => (
            <img src={store.image} alt="" key={store.name} />
          ))}
        </div>

        <dl className="store-detail-stats">
          <div>
            <dt>Employees:</dt>
            <dd>{selectedStore.employees}</dd>
          </div>
          <div>
            <dt>Items:</dt>
            <dd>{selectedStore.items}</dd>
          </div>
          <div>
            <dt>Orders:</dt>
            <dd>{selectedStore.orders}</dd>
          </div>
          <div>
            <dt>Refunds:</dt>
            <dd>{selectedStore.refunds}</dd>
          </div>
        </dl>

        <dl className="store-detail-meta">
          <div>
            <dt>Most sold item:</dt>
            <dd>{selectedStore.topItem}</dd>
          </div>
          <div>
            <dt>Most popular category:</dt>
            <dd>{selectedStore.topCategory}</dd>
          </div>
          <div>
            <dt>Customer satisfaction:</dt>
            <dd>{selectedStore.satisfaction}</dd>
          </div>
          <div>
            <dt>Status:</dt>
            <dd>{selectedStore.status}</dd>
          </div>
        </dl>
      </section>
    </DashboardLayout>
  )
}
