export default function About(){
  return (
    <section id="about" className="relative py-24 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About BuildStone Co.</h2>
            <p className="text-slate-300 mb-6">We are a full-service construction firm and premium stone supplier. Our teams combine engineering rigor with artisan stone craftsmanship to deliver projects that stand the test of time.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 rounded-xl overflow-hidden border border-white/10">
              <div className="p-6">
                <h3 className="text-orange-400 font-semibold">Mission</h3>
                <p className="text-sm text-slate-300 mt-2">To build durable, beautiful spaces with uncompromising quality and ethical practice.</p>
              </div>
              <div className="p-6">
                <h3 className="text-orange-400 font-semibold">Vision</h3>
                <p className="text-sm text-slate-300 mt-2">Be the most trusted partner for construction and premium stone surfaces in the region.</p>
              </div>
              <div className="p-6">
                <h3 className="text-orange-400 font-semibold">Values</h3>
                <p className="text-sm text-slate-300 mt-2">Safety, integrity, craftsmanship, sustainability, and client success.</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1484910292437-025e5d13ce87?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" aria-label="Construction site with crane"/>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" aria-label="Marble slabs in a warehouse"/>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" aria-label="Granite countertop close-up"/>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" aria-label="Architectural blueprint and tools"/>
          </div>
        </div>
      </div>
    </section>
  );
}
