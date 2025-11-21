import { useState } from "react";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact(){
  const [form, setForm] = useState({name:"", email:"", phone:"", subject:"Quote Request", message:"", preferred_time:""});
  const [status, setStatus] = useState(null);

  async function submit(e){
    e.preventDefault();
    setStatus("Sending...");
    try{
      const res = await fetch(`${BACKEND}/api/inquiries`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)});
      if(!res.ok) throw new Error(await res.text());
      setStatus("Thanks! We'll get back to you shortly.");
      setForm({name:"", email:"", phone:"", subject:"Quote Request", message:"", preferred_time:""});
    }catch(err){
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let’s build your vision</h2>
          <p className="text-slate-300 mb-6">Share your project details or stone requirements and our team will respond within one business day.</p>
          <div className="space-y-3 text-slate-300">
            <p><strong className="text-white">Phone:</strong> +1 (555) 010‑2020</p>
            <p><strong className="text-white">Email:</strong> info@buildstone.co</p>
            <p><strong className="text-white">Hours:</strong> Mon–Fri 9:00–18:00</p>
            <p><strong className="text-white">Address:</strong> 1200 Stone Ave, Suite 300, Metro City</p>
          </div>
          <div className="mt-6 aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" aria-label="Map location placeholder"/>
        </div>
        <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="bg-black/20 border border-white/10 rounded-md px-4 py-3" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input type="email" className="bg-black/20 border border-white/10 rounded-md px-4 py-3" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <input className="bg-black/20 border border-white/10 rounded-md px-4 py-3" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <input className="bg-black/20 border border-white/10 rounded-md px-4 py-3" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} />
          <input className="bg-black/20 border border-white/10 rounded-md px-4 py-3 sm:col-span-2" placeholder="Preferred contact time" value={form.preferred_time} onChange={e=>setForm({...form, preferred_time:e.target.value})} />
          <textarea rows={5} className="bg-black/20 border border-white/10 rounded-md px-4 py-3 sm:col-span-2" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <div className="sm:col-span-2 flex items-center justify-between">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-lg hover:shadow-orange-500/20 transition">Send Message</button>
            {status && <p className="text-sm text-slate-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
