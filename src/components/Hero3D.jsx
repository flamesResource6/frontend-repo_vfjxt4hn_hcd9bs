import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <div className="relative h-72 rounded-2xl overflow-hidden border border-black/5 bg-white">
      <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </div>
  )
}
