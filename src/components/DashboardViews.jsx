import { motion } from 'framer-motion'
import Hero3D from './Hero3D'

export function DashboardHome() {
  return (
    <div className="space-y-6">
      <Hero3D />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[{t:'Active Users',v:'1,248'},{t:'Conversations',v:'8,421'},{t:'Satisfaction',v:'97%'}].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="rounded-2xl border border-black/5 bg-white p-5">
            <p className="text-xs text-gray-500">{c.t}</p>
            <p className="text-3xl font-semibold mt-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{c.v}</p>
            <div className="mt-3 h-2 rounded-full bg-gray-100">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function KnowledgePanel() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6">
      <h3 className="text-lg font-semibold">Knowledge Panel</h3>
      <p className="text-sm text-gray-600 mt-1">Add sources your bot can learn from.</p>
      <form className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input placeholder="Title" className="h-10 rounded-lg border border-gray-200 px-3 text-sm" />
        <input placeholder="Tags (comma separated)" className="h-10 rounded-lg border border-gray-200 px-3 text-sm" />
        <input placeholder="Source URL" className="h-10 rounded-lg border border-gray-200 px-3 text-sm" />
        <button type="button" className="md:col-span-3 h-10 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Save Source</button>
      </form>
    </div>
  )
}

export function PromptService() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6">
      <h3 className="text-lg font-semibold">Prompt Service</h3>
      <p className="text-sm text-gray-600 mt-1">Create reusable prompts with variables.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <input placeholder="Name" className="h-10 rounded-lg border border-gray-200 px-3 text-sm" />
        <input placeholder="Variables (comma)" className="h-10 rounded-lg border border-gray-200 px-3 text-sm" />
        <textarea placeholder="Prompt content..." className="md:col-span-2 min-h-[120px] rounded-lg border border-gray-200 p-3 text-sm" />
        <button type="button" className="md:col-span-2 h-10 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Save Prompt</button>
      </div>
    </div>
  )
}

export function ApiRest() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6">
      <h3 className="text-lg font-semibold">API REST</h3>
      <p className="text-sm text-gray-600 mt-1">Generate and manage API keys for your chatbot.</p>
      <div className="mt-4 flex items-center gap-3">
        <input placeholder="Key Name" className="h-10 flex-1 rounded-lg border border-gray-200 px-3 text-sm" />
        <button className="h-10 rounded-lg bg-orange-500 text-white text-sm font-medium px-4 hover:bg-orange-600">Generate</button>
      </div>
      <div className="mt-6">
        <p className="text-xs text-gray-500">Your keys</p>
        <div className="mt-2 rounded-lg border border-gray-200 divide-y">
          {[1,2].map(i => (
            <div key={i} className="p-3 flex items-center justify-between">
              <p className="text-sm font-mono">sk_live_demo_key_{i}</p>
              <button className="text-xs text-gray-500 hover:text-gray-900">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DocumentPanel() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6">
      <h3 className="text-lg font-semibold">Documents</h3>
      <p className="text-sm text-gray-600 mt-1">Upload or paste content for retrieval.</p>
      <div className="mt-4 grid grid-cols-1 gap-3">
        <textarea placeholder="Paste content here..." className="min-h-[160px] rounded-lg border border-gray-200 p-3 text-sm" />
        <div className="flex items-center justify-between">
          <select className="h-10 rounded-lg border border-gray-200 px-3 text-sm">
            <option>text</option>
            <option>markdown</option>
            <option>html</option>
          </select>
          <button className="h-10 rounded-lg bg-gray-900 text-white text-sm font-medium px-4 hover:bg-gray-800">Save Document</button>
        </div>
      </div>
    </div>
  )
}

export function UpgradePlan() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6">
      <h3 className="text-lg font-semibold">Upgrade Plan</h3>
      <p className="text-sm text-gray-600 mt-1">Unlock higher limits and priority support.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[{t:'Starter',p:'$9'},{t:'Pro',p:'$29'},{t:'Scale',p:'$99'}].map((card,i)=> (
          <motion.div key={i} whileHover={{ y: -4 }} className="rounded-xl border border-black/5 p-5 bg-gradient-to-br from-white to-gray-50">
            <p className="text-sm font-semibold">{card.t}</p>
            <p className="text-3xl font-bold mt-2">{card.p}<span className="text-sm text-gray-500">/mo</span></p>
            <ul className="mt-3 text-sm text-gray-600 space-y-1">
              <li>• Unlimited chats</li>
              <li>• Custom themes</li>
              <li>• Team access</li>
            </ul>
            <button className="mt-4 h-10 w-full rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Choose</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function ChatbotShapeTab() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Chatbot Shape</h3>
          <p className="text-sm text-gray-600 mt-1">Adjust colors and bubble style. Preview updates live.</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500">Primary color</label>
              <input type="color" defaultValue="#ff7a00" className="block mt-1 h-10 w-full rounded" />
            </div>
            <div>
              <label className="text-xs text-gray-500">Accent color</label>
              <input type="color" defaultValue="#111827" className="block mt-1 h-10 w-full rounded" />
            </div>
            <div className="col-span-2">
              <label className="text-xs text-gray-500">Bubble style</label>
              <select className="mt-1 h-10 w-full rounded-lg border border-gray-200 px-3 text-sm">
                <option>rounded</option>
                <option>square</option>
                <option>soft</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6">
          <div className="max-w-md mx-auto">
            <div className="rounded-2xl border border-black/5 overflow-hidden bg-white">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-3 text-sm font-medium">Live Chatbot Preview</div>
              <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-400" />
                  <div className="rounded-2xl rounded-tl-none bg-gray-100 px-3 py-2 text-sm text-gray-800 max-w-[80%]">Hi! I’m your AI assistant. Ask me anything about your products.</div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-gradient-to-r from-orange-500 to-amber-400 text-white px-3 py-2 text-sm max-w-[80%]">What are today’s shipping options?</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-400" />
                  <div className="rounded-2xl rounded-tl-none bg-gray-100 px-3 py-2 text-sm text-gray-800 max-w-[80%]">We offer standard and express shipping with real‑time tracking.</div>
                </div>
              </div>
              <div className="p-3 border-t border-black/5">
                <div className="flex items-center gap-2">
                  <input placeholder="Type a message..." className="flex-1 h-10 rounded-lg border border-gray-200 px-3 text-sm" />
                  <button className="h-10 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
