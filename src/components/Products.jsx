export default function Products(){
  const marble = [
    {
      name: "Carrara White",
      img: "https://images.unsplash.com/photo-1531934781210-06df87d07c3f?q=80&w=1200&auto=format&fit=crop",
      desc: "Soft white background with delicate grey veining. Timeless and elegant.",
    },
    {
      name: "Calacatta Gold",
      img: "https://images.unsplash.com/photo-1554494583-d8f5b3664b8a?q=80&w=1200&auto=format&fit=crop",
      desc: "Bold dramatic veins with warm gold accents for statement surfaces.",
    },
    {
      name: "Emperador Dark",
      img: "https://images.unsplash.com/photo-1524777313-3bfa7568e8d0?q=80&w=1200&auto=format&fit=crop",
      desc: "Rich chocolate tones with fine white veining. Luxurious and warm.",
    },
    {
      name: "Nero Marquina",
      img: "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=1200&auto=format&fit=crop",
      desc: "Deep black stone with striking white veins for bold modern spaces.",
    },
  ];

  const granite = [
    {
      name: "Absolute Black",
      img: "https://images.unsplash.com/photo-1582582621959-48f547f5e5cd?q=80&w=1200&auto=format&fit=crop",
      desc: "Uniform deep black granite ideal for sleek countertops and cladding.",
    },
    {
      name: "Baltic Brown",
      img: "https://images.unsplash.com/photo-1530062845286-31c30c0b7b69?q=80&w=1200&auto=format&fit=crop",
      desc: "Warm brown tones with circular patterns adding visual depth.",
    },
    {
      name: "Blue Pearl",
      img: "https://images.unsplash.com/photo-1538471700920-ccb30e3ecac1?q=80&w=1200&auto=format&fit=crop",
      desc: "Iridescent blue crystals that shimmer in changing light.",
    },
    {
      name: "Kashmir White",
      img: "https://images.unsplash.com/photo-1542372257-9056dfef9106?q=80&w=1200&auto=format&fit=crop",
      desc: "Light grey-white base with fine speckles—versatile and refined.",
    },
  ];

  const Card = ({item}) => (
    <div className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage:`url(${item.img})`}} aria-label={item.name}/>
      <div className="p-5">
        <h3 className="font-semibold text-white">{item.name}</h3>
        <p className="text-sm text-slate-300 mt-1">{item.desc}</p>
      </div>
    </div>
  );

  return (
    <section id="products" className="py-24 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Product showcase</h2>
          <p className="text-slate-300 mt-2">Explore a curated selection of marble and granite varieties. Images shown are sample textures.</p>
        </div>

        <h3 className="text-xl font-semibold text-orange-400 mb-4">Marble</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marble.map((m, i) => <Card key={i} item={m}/>) }
        </div>

        <h3 className="text-xl font-semibold text-orange-400 mb-4">Granite</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {granite.map((g, i) => <Card key={i} item={g}/>) }
        </div>
      </div>
    </section>
  );
}
