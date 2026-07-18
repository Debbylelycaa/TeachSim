import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import Button from '../ui/Button'

export default function Navbar() {
  const navigate = useNavigate()

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold text-indigo-700">
          TeachSim
        </Link>

        <div className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <Link to="/" className="hover:text-indigo-700">Dashboard</Link>
          <Link to="/sessions" className="hover:text-indigo-700">Sesi Latihan</Link>
        </div>

        <Button variant="secondary" onClick={handleLogout} className="!w-auto px-4 py-2">
          Keluar
        </Button>
      </nav>
    </header>
  )
}
