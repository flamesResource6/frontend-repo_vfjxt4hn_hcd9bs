import { Search } from 'lucide-react'

export default function Topbar() {
  return (
    <div className="h-16 border-b border-black/5 bg-white/60 backdrop-blur-xl flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-emerald-500" />
        <p className="text-sm text-gray-600">Online</p>
      </div>
      <div className="relative w-80">
        <input className="w-full h-10 rounded-lg border border-gray-200 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Search in dashboard" />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      </div>
    </div>
  )
}
