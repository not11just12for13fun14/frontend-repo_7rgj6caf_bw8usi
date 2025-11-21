import { HardHat, Ruler, Truck, Gem } from "lucide-react";

export default function Services(){
  const services = [
    {
      title: "Construction Services",
      icon: <HardHat className="text-orange-400" size={28} />,
      desc: "Turnkey projects, civil works, renovations, and project management with a safety-first culture.",
      points: ["Design & Build", "Structural & Civil", "Fit‑outs & Renovations", "Project Management"],
    },
    {
      title: "Marble Products",
      icon: <Gem className="text-orange-400" size={28} />,
      desc: "Premium marble slabs, tiles, and custom fabrication for luxury interiors and exteriors.",
      points: ["Carrara", "Calacatta", "Emperador", "Nero Marquina"],
    },
    {
      title: "Granite Products",
      icon: <Gem className="text-orange-400" size={28} />,
      desc: "Durable granite in multiple finishes for countertops, flooring, and cladding.",
      points: ["Absolute Black", "Baltic Brown", "Blue Pearl", "Kashmir White"],
    },
    {
      title: "Logistics & Delivery",
      icon: <Truck className="text-orange-400" size={28} />,
      desc: "Safe handling, secure crating, and on‑time delivery to site.",
      points: ["Crating", "Site Delivery", "On‑site Inspection", "After‑sales Support"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">What we do</h2>
          <p className="text-slate-300 mt-2">Engineered construction solutions and exquisite stone materials, delivered end‑to‑end.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
              <div className="flex items-center gap-3 mb-3">{s.icon}<h3 className="font-semibold">{s.title}</h3></div>
              <p className="text-sm text-slate-300 mb-4">{s.desc}</p>
              <ul className="space-y-1 text-sm text-slate-300/90">
                {s.points.map((p, idx)=>(<li key={idx} className="flex items-center gap-2 before:content-['•'] before:text-orange-500 before:font-bold">{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
