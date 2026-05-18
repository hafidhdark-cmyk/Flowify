import { useState } from 'react'
import {
  ChevronDown,
  Check,
  Plus,
  Search,
  Shirt,
  X,
} from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'
import { useAddProduct } from '../components/AddProductContext'

const products = [
  {
    id: '179-12',
    name: 'Unisex T-shirt White',
    category: 'T-Shirt',
    stock: 12,
    location: '3 stores',
    status: 'Active',
    tone: 'dark',
    image: '/products/white-tshirt.jpg',
    brand: 'Unnamed Brand',
    sizes: 'XS, S, M, L, XL, XXL',
    gender: 'Male, Female',
    order: 'SKI9-111',
  },
  {
    id: '179-13',
    name: 'Unisex T-Shirt Black',
    category: 'T-Shirt',
    stock: 10,
    location: '4 stores',
    status: 'Active',
    tone: 'black',
    image: '/products/black-tshirt.jpg',
    brand: 'Unnamed Brand',
    sizes: 'XS, S, M, L, XL',
    gender: 'Male, Female',
    order: 'SKI9-112',
  },
  {
    id: '179-14',
    name: 'Tank Top White',
    category: 'Tops',
    stock: 28,
    location: '3 stores',
    status: 'Active',
    tone: 'cream',
    image: '/products/white-tshirt.jpg',
    brand: 'Unnamed Brand',
    sizes: 'S, M, L, XL',
    gender: 'Female',
    order: 'SKI9-113',
  },
  {
    id: '179-15',
    name: 'Rain Jacket Male',
    category: 'Outwear',
    stock: 12,
    location: '3 stores',
    status: 'Active',
    tone: 'amber',
    image: '/products/rain-jacket.jpg',
    brand: 'Rain Club',
    sizes: 'M, L, XL',
    gender: 'Male',
    order: 'SKI9-114',
  },
  {
    id: '179-16',
    name: 'Bomber Jacket Male',
    category: 'Outwear',
    stock: 0,
    location: '0 stores',
    status: 'Sold out',
    tone: 'tan',
    image: '/products/rain-jacket.jpg',
    brand: 'Northline',
    sizes: 'M, L',
    gender: 'Male',
    order: 'SKI9-115',
  },
  {
    id: '179-17',
    name: 'Unisex Socks Black',
    category: 'Accessories',
    stock: 37,
    location: '2 stores',
    status: 'Active',
    tone: 'slate',
    image: '/products/black-tshirt.jpg',
    brand: 'Unnamed Brand',
    sizes: 'S, M, L',
    gender: 'Male, Female',
    order: 'SKI9-116',
  },
  {
    id: '179-18',
    name: 'Denim Shorts Women',
    category: 'Bottoms',
    stock: 1,
    location: '1 store',
    status: 'Low in stock',
    tone: 'blue',
    image: '/products/denim-shorts.jpg',
    brand: 'Marlow',
    sizes: 'S, M',
    gender: 'Female',
    order: 'SKI9-117',
  },
  {
    id: '179-19',
    name: 'Summer Dress Black',
    category: 'Dresses',
    stock: 0,
    location: '0 stores',
    status: 'Sold out',
    tone: 'green',
    image: '/products/denim-shorts.jpg',
    brand: 'Summer Lane',
    sizes: 'S, M, L',
    gender: 'Female',
    order: 'SKI9-118',
  },
  {
    id: '179-20',
    name: 'Kids T-shirt Pink',
    category: 'T-shirts',
    stock: 1,
    location: '1 store',
    status: 'Low in stock',
    tone: 'pink',
    image: '/products/white-tshirt.jpg',
    brand: 'Little Thread',
    sizes: 'XS, S, M',
    gender: 'Kids',
    order: 'SKI9-119',
  },
]

const relatedProducts = [
  'Unisex T-shirt Black',
  'Unisex T-shirt Blue',
  'Unisex T-shirt Pink',
  'Crop-top Black F',
  'Crop-top White F',
  'Tank top White F',
  'Tank top Beige F',
]

const stores = [
  ['Manchester, UK', true],
  ['Yorkshire, UK', true],
  ['Hull, UK', false],
  ['Leicester, UK', true],
]

function ProductThumb({ product, tone, image, alt, large = false }) {
  return (
    <div className={`product-thumb product-thumb-${tone} ${large ? 'product-thumb-large' : ''}`}>
      {product?.image || image ? (
        <img src={product?.image || image} alt={product?.name || alt} />
      ) : (
        <Shirt size={large ? 52 : 21} strokeWidth={2.2} />
      )}
    </div>
  )
}

function StatusPill({ status }) {
  return (
    <span className={`status-pill status-${status.toLowerCase().replaceAll(' ', '-')}`}>
      {status}
    </span>
  )
}

function getProductGroup(product) {
  return product.category.toLowerCase().includes('shirt') ? 'T-shirts' : product.category
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { openAddProduct } = useAddProduct()

  if (selectedProduct) {
    return (
      <DashboardLayout title={`Products - ${getProductGroup(selectedProduct)} - ${selectedProduct.name}`}>
        <p className="product-updated">Last updated January 29, 2025 at 2:39PM</p>

        <section className="product-detail-card">
          <ProductThumb product={selectedProduct} tone={selectedProduct.tone} large />

          <div className="product-detail-info">
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.brand}</p>

            <dl>
              <div>
                <dt>Available sizes:</dt>
                <dd>{selectedProduct.sizes}</dd>
              </div>
              <div>
                <dt>Category:</dt>
                <dd>{getProductGroup(selectedProduct)}</dd>
              </div>
              <div>
                <dt>Gender:</dt>
                <dd>{selectedProduct.gender}</dd>
              </div>
            </dl>
          </div>

          <div className="product-detail-actions">
            <button type="button" className="ghost-button" onClick={() => setSelectedProduct(null)}>
              Back
            </button>
            <button type="button" className="ghost-button">
              Delete
            </button>
            <button type="button" className="primary-button">
              Edit Product
            </button>
          </div>

          <div className="product-meta">
            <ProductThumb tone="qr" image="/products/product-qr.png" alt="Product QR code" />
            <div>
              <span>Product code: {selectedProduct.id}</span>
              <span>Order name: {selectedProduct.order}</span>
            </div>
          </div>

          <div className="store-availability">
            <h3>Store availability</h3>
            {stores.map(([store, available]) => (
              <div className="availability-row" key={store}>
                <span>{store}</span>
                {available ? (
                  <Check className="available-icon" size={15} />
                ) : (
                  <X className="unavailable-icon" size={15} />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="related-products" aria-label="Related products">
          <h2>Related products</h2>
          <div>
            {relatedProducts.map((product, index) => (
              <button type="button" key={product}>
                <ProductThumb
                  product={products[index % products.length]}
                  tone={products[index % products.length].tone}
                />
                <span>{product}</span>
              </button>
            ))}
          </div>
        </section>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout title="Products">
      <section className="products-toolbar" aria-label="Product tools">
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

      <section className="products-panel">
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
            <button
              type="button"
              className="products-table product-row-button"
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >
              <span className="product-check" aria-hidden="true" />
              <ProductThumb product={product} tone={product.tone} />
              <span>{product.name}</span>
              <StatusPill status={product.status} />
              <span>{product.stock} in stock</span>
              <span>{product.category}</span>
              <span>{product.location}</span>
            </button>
          ))}
        </div>
      </section>
    </DashboardLayout>
  )
}
