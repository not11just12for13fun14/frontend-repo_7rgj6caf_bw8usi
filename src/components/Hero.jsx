import Spline from '@splinetool/react-spline';

export default function Hero(){
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur border border-white/10 mb-6">Premium Construction & Stone Materials</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Building excellence with precision, stone, and strength
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg">
            From turnkey construction to exquisite marble and granite products, we deliver quality craftsmanship for enduring spaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-lg hover:shadow-orange-500/20 transition">Request a Quote</a>
            <a href="#services" className="px-6 py-3 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition">Explore Services</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950"/>
    </section>
  );
}
