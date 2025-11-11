import { Home, BookOpen, MessageSquare, Globe, FileText, Crown, Bot } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: Home },
  { key: 'knowledge', label: 'Knowledge Panel', icon: BookOpen },
  { key: 'prompts', label: 'Prompt Service', icon: MessageSquare },
  { key: 'api', label: 'API REST', icon: Globe },
  { key: 'documents', label: 'Document', icon: FileText },
  { key: 'upgrade', label: 'Upgrade Plan', icon: Crown },
  { key: 'chatbot', label: 'Chatbot Shape', icon: Bot },
]

export default function Sidebar({ active, onSelect }) {
  return (
    <div className="h-full w-64 bg-white/80 backdrop-blur-xl border-r border-black/5 pt-6 pb-4 flex flex-col">
      <div className="px-6 mb-6">
        <div className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Bot</span>
          <span className="ml-1 bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">Studio</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Customer AI assistant dashboard</p>
      </div>
      <nav className="px-2 space-y-1 flex-1 overflow-y-auto">
        {items.map(({ key, label, icon: Icon }) => {
          const selected = active === key
          return (
            <motion.button
              key={key}
              onClick={() => onSelect(key)}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${selected ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{label}</span>
              {selected && (
                <motion.span layoutId="pill" className="ml-auto h-2 w-2 rounded-full bg-orange-500" />
              )}
            </motion.button>
          )
        })}
      </nav>
      <div className="px-4">
        <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
          <p className="text-xs opacity-80">Tip</p>
          <p className="text-sm mt-1">Use Chatbot Shape to preview your live assistant.</p>
        </div>
      </div>
    </div>
  )
}
