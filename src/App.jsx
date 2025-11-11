import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import { motion, AnimatePresence } from 'framer-motion'
import { DashboardHome, KnowledgePanel, PromptService, ApiRest, DocumentPanel, UpgradePlan, ChatbotShapeTab } from './components/DashboardViews'

function App() {
  const [active, setActive] = useState('dashboard')

  const renderView = () => {
    switch(active){
      case 'dashboard': return <DashboardHome />
      case 'knowledge': return <KnowledgePanel />
      case 'prompts': return <PromptService />
      case 'api': return <ApiRest />
      case 'documents': return <DocumentPanel />
      case 'upgrade': return <UpgradePlan />
      case 'chatbot': return <ChatbotShapeTab />
      default: return <DashboardHome />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="flex min-h-screen">
        <Sidebar active={active} onSelect={setActive} />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-6">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
