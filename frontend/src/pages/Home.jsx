import MainLayout from '../components/layout/MainLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useAuth } from '../hooks/useAuth'

export default function Home() {
  const { user } = useAuth()

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-slate-900">
          Halo, {user?.user_metadata?.full_name || 'Guru'} 👋
        </h1>
        <p className="text-slate-500 mt-1">Siap latihan mengajar hari ini?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <h2 className="font-medium text-slate-900 mb-2">Mulai Sesi Baru</h2>
          <p className="text-sm text-slate-500 mb-4">Upload materi dan mulai simulasi mengajar.</p>
          <Button variant="accent">Mulai</Button>
        </Card>
        <Card>
          <h2 className="font-medium text-slate-900 mb-2">Riwayat Sesi</h2>
          <p className="text-sm text-slate-500 mb-4">Lihat skor dan laporan sesi sebelumnya.</p>
          <Button variant="secondary">Lihat Riwayat</Button>
        </Card>
      </div>
    </MainLayout>
  )
}
