import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Testimonials from './components/Testimonials'
import ProductCard from './components/ProductCard'

function Home() {
  const [config, setConfig] = useState({ limited_edition_active: false })
  const navigate = useNavigate()
  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const r = await fetch(`${base}/config`)
        const data = await r.json()
        setConfig(data)
      } catch {}
    }
    load()
  }, [])
  return (
    <>
      <Hero takeover={!!config?.limited_edition_active} onExplore={() => navigate(config?.limited_edition_active ? '/collections/celestial-gaze' : '/collections/core')} />
      <Philosophy />
      <Testimonials />
    </>
  )
}

function CollectionPage() {
  const { handle } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const r = await fetch(`${base}/collections/${handle}/products`)
        const data = await r.json()
        setProducts(data)
      } catch (e) {
        setProducts([])
      } finally {
        setLoading(false)
      }
    }
    setLoading(true)
    load()
  }, [handle])

  const addToCart = (p) => {
    alert(`${p.title} added to your collection.`)
  }

  const jewel = handle === 'celestial-gaze'

  return (
    <section className={`px-4 py-12 ${jewel ? 'bg-gradient-to-b from-indigo-50 to-rose-50' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`font-serif text-3xl tracking-widest ${jewel ? 'text-indigo-900' : 'text-gray-900'}`}>
          {jewel ? 'Celestial Gaze — Limited Edition' : 'The Gilded Gaze — Core'}
        </h1>
        <p className="mt-2 text-gray-600">Only the essentials: poised, deliberate, undeniably elegant.</p>

        {loading ? (
          <div className="mt-10 text-gray-600">Loading products…</div>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} onAdd={addToCart} />)
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-serif text-3xl tracking-widest text-gray-900">About The Gilded Gaze</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">We honor timeless beauty with heirloom craftsmanship, empowering you to embrace your inherent worth. Each cluster is considered, cultivated, and created to elevate your quiet confidence.</p>
    </section>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections/:handle" element={<CollectionPage />} />
      </Routes>
    </Layout>
  )
}
