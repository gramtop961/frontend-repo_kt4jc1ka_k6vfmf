import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 text-sm ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`

export default function Layout({ children }) {
  const [config, setConfig] = useState({ limited_edition_active: false, limited_edition_name: 'Celestial Gaze' })
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/config`)
        const data = await res.json()
        setConfig(data)
      } catch (e) {
        // ignore
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f2]">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-widest text-gray-900">The Gilded Gaze</Link>
          <button className="sm:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="i-lucide-menu" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <nav className="hidden sm:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/collections/core" className={navLinkClass}>Collections</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            {config?.limited_edition_active && (
              <NavLink to="/collections/celestial-gaze" className={({isActive}) => `px-3 py-2 text-sm rounded-md ${isActive ? 'text-indigo-900' : 'text-indigo-800 hover:text-indigo-900'} bg-indigo-50 border border-indigo-200`}>
                LIMITED EDITION: {config?.limited_edition_name} 🌌
              </NavLink>
            )}
          </nav>
        </div>
        {menuOpen && (
          <div className="sm:hidden border-t border-neutral-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/collections/core" className={navLinkClass}>Collections</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              {config?.limited_edition_active && (
                <NavLink to="/collections/celestial-gaze" className="block px-3 py-2 text-sm rounded-md text-indigo-800 bg-indigo-50 border border-indigo-200">
                  LIMITED EDITION: {config?.limited_edition_name} 🌌
                </NavLink>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-neutral-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <div className="font-serif text-lg text-gray-900 mb-2">The Gilded Gaze</div>
            <p>Quiet luxury. Effortless elegance. A legacy of refined beauty.</p>
          </div>
          <div>
            <div className="font-medium text-gray-900 mb-2">Navigate</div>
            <ul className="space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections/core">Collections</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-gray-900 mb-2">Policies</div>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} The Gilded Gaze</div>
      </footer>
    </div>
  )
}
