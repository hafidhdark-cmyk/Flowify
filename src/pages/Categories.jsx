import { useState } from 'react'
import {
  ChevronDown,
  Plus,
  Search,
} from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'
import { useAddProduct } from '../components/AddProductContext'

const categories = [
  { name: 'Bottoms', items: 49, icon: '/category-icons/bottoms.svg' },
  { name: 'Coats', items: 23, icon: '/category-icons/coats.svg' },
  { name: 'Jeans', items: 11, icon: '/category-icons/jeans.svg' },
  { name: 'T-shirts', items: 13, icon: '/category-icons/tshirts.svg' },
  { name: 'Tops', items: 7, icon: '/category-icons/tops.svg' },
  { name: 'Accessories', items: 63, icon: '/category-icons/accessories.svg' },
]

const products = [
  {
    id: '179-12',
    name: 'Unisex T-shirt White',
    category: 'T-Shirt',
    stock: 12,
    location: '3 stores',
    status: 'Active',
    image: '/products/white-tshirt.jpg',
  },
  {
    id: '179-13',
    name: 'Unisex T-Shirt Black',
    category: 'T-Shirt',
    stock: 10,
    location: '4 stores',
    status: 'Active',
    image: '/products/black-tshirt.jpg',
  },
  {
    id: '179-20',
    name: 'Kids T-shirt Pink',
    category: 'T-shirts',
    stock: 1,
    location: '1 store',
    status: 'Low in stock',
    image: '/products/white-tshirt.jpg',
  },
]

function StatusPill({ status }) {
  return (
    <span className={`status-pill status-${status.toLowerCase().replaceAll(' ', '-')}`}>
      {status}
    </span>
  )
}

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { openAddProduct } = useAddProduct()

  if (selectedCategory) {
    return (
      <DashboardLayout title={`Category - ${selectedCategory.name}`}>
        <p className="product-updated">Last updated January 29, 2025 at 2:39PM</p>

        <section className="products-toolbar category-products-toolbar" aria-label="Category product tools">
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
            Add Product
          </button>
        </section>

        <section className="products-panel category-products-panel">
          <div className="products-table products-table-head">
            <span />
            <span />
            <span>Name of product</span>
            <span>Status</span>
            <span>Stock left</span>
            <span>Category</span>
            <span>Location</span>
          </div>

          <div className="products-table-body">
            {products.map((product) => (
              <button type="button" className="products-table product-row-button" key={product.id}>
                <span className="product-check" aria-hidden="true" />
                <span className="product-thumb">
                  <img src={product.image} alt={product.name} />
                </span>
                <span>{product.name}</span>
                <StatusPill status={product.status} />
                <span>{product.stock} in stock</span>
                <span>{product.category}</span>
                <span>{product.location}</span>
              </button>
            ))}
          </div>

          <button type="button" className="ghost-button category-back-button" onClick={() => setSelectedCategory(null)}>
            Back
          </button>
        </section>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout title="Categories">
      <p className="product-updated">Last updated January 29, 2025 at 2:39PM</p>
      <button type="button" className="add-product-button add-category-button">
        <Plus size={14} strokeWidth={2.5} />
        Add Category
      </button>

      <section className="categories-list" aria-label="Categories">
        {categories.map((category) => (
          <button
            type="button"
            className="category-card"
            key={category.name}
            onClick={() => setSelectedCategory(category)}
          >
            <span className="category-card-media">
              <img src={category.icon} alt="" aria-hidden="true" />
            </span>
            <strong>{category.name}</strong>
            <span>{category.items} items</span>
          </button>
        ))}
      </section>
    </DashboardLayout>
  )
}
