export default function ProductCard({ product, onAdd }) {
  const jewel = product.collection_handle === 'celestial-gaze'
  const badge = product.limited_badge
  return (
    <div className={`relative group border rounded-lg p-4 bg-white ${jewel ? 'border-indigo-200' : 'border-neutral-200'}`}>
      {badge && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-rose-300 text-[10px] tracking-widest uppercase text-white px-2 py-1 rounded shadow">
          {badge}
        </div>
      )}
      <div className={`aspect-[4/3] rounded-md mb-4 ${jewel ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900' : 'bg-neutral-200'} flex items-center justify-center overflow-hidden`}>
        <span className={`font-serif text-lg ${jewel ? 'text-rose-100' : 'text-gray-700'}`}>{product.title}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <div>
          <div className="font-medium text-gray-900">${product.price.toFixed(2)}</div>
          {product.compare_at_price && (
            <div className="text-xs line-through text-gray-500">${product.compare_at_price.toFixed(2)}</div>
          )}
        </div>
        <div className={`text-sm ${product.inventory > 0 ? 'text-gray-600' : 'text-red-600'}`}>
          {product.inventory > 0 ? `Only ${product.inventory} remain` : 'Sold Out'}
        </div>
      </div>
      <button onClick={() => onAdd(product)} disabled={product.inventory === 0} className={`mt-4 w-full py-2 rounded-md border transition ${product.inventory === 0 ? 'bg-gray-100 text-gray-400 border-gray-200' : jewel ? 'bg-indigo-50 border-indigo-200 text-indigo-900 hover:bg-indigo-100' : 'bg-neutral-50 border-neutral-200 text-gray-900 hover:bg-neutral-100'}`}>
        {product.is_bundle ? 'Add Bundle' : 'Add to My Collection'}
      </button>
    </div>
  )
}
