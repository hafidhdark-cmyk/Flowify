import { X } from 'lucide-react'
import { useState } from 'react'

export default function AddProductPanel({ isOpen, onClose }) {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  const handleClose = () => {
    setIsSuccessOpen(false)
    onClose()
  }

  const handleSave = () => {
    setIsSuccessOpen(true)
  }

  return (
    <div className={`add-product-overlay ${isOpen ? 'add-product-overlay-open' : ''}`} aria-hidden={!isOpen}>
      <button type="button" className="add-product-backdrop" aria-label="Close add product" onClick={handleClose} />

      <aside className="add-product-drawer" aria-label="Add product panel">
        <div className="add-product-header">
          <h2>Add product</h2>
          <button type="button" aria-label="Close add product" onClick={handleClose}>
            <X size={18} />
          </button>
        </div>

        <form className="add-product-form">
          <label>
            <span>Name*</span>
            <input type="text" />
          </label>

          <label>
            <span>Item code*</span>
            <input type="text" />
          </label>

          <label className="add-product-field-large">
            <span>Description</span>
            <textarea />
          </label>

          <label>
            <span>Stock size*</span>
            <input type="number" />
          </label>

          <label>
            <span>Category*</span>
            <input type="text" />
          </label>

          <label>
            <span>Stores availability*</span>
            <select defaultValue="">
              <option value="" disabled />
              <option>Manchester, UK</option>
              <option>Yorkshire, UK</option>
              <option>Hull, UK</option>
              <option>Leicester, UK</option>
            </select>
          </label>

          <label>
            <span>Price*</span>
            <input type="number" />
          </label>

          <label className="add-product-field-large">
            <span>Product photos*</span>
            <input type="file" multiple />
          </label>

          <button type="button" className="primary-button add-product-save" onClick={handleSave}>
            Save product
          </button>
        </form>
      </aside>

      {isSuccessOpen && (
        <div className="success-alert-overlay" role="dialog" aria-modal="true" aria-label="Product saved">
          <div className="success-alert">
            <div className="success-alert-icon">✓</div>
            <h2>Success!</h2>
            <p>PRODUCT UPDATED SUCCESSFULLY!</p>
            <button type="button" onClick={handleClose}>
              OK, Thanks.
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
