import { useEffect, useMemo, useRef, useState } from "react";
import { Send, Bot, Calendar, ShoppingCart } from "lucide-react";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function Chatbot(){
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {role:"bot", text:"Hi! I'm your project assistant. Ask about services, marble/granite, pricing, place an order, or book a meeting."}
  ]);
  const listRef = useRef(null);

  useEffect(()=>{
    if(listRef.current){
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function send(){
    if(!input.trim()) return;
    const text = input.trim();
    setMessages(prev => [...prev, {role:"user", text}]);
    setInput("");
    try{
      const res = await fetch(`${BACKEND}/api/chat`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({message:text, history: messages.map(m=>m.text)})});
      const data = await res.json();
      setMessages(prev => [...prev, {role:"bot", text: data.reply || ""}]);
    }catch(e){
      setMessages(prev => [...prev, {role:"bot", text:"Sorry, I couldn't reach the server right now."}]);
    }
  }

  async function quick(type){
    if(type==='order'){
      // sample quick order
      await fetch(`${BACKEND}/api/orders`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({customer_name:'Site Visitor', email:'visitor@example.com', product_type:'marble', product_name:'Carrara White', quantity:'50 sqm', notes:'Sample order from chatbot'})});
      setMessages(prev=>[...prev, {role:'bot', text:'I have recorded a sample order. Share your details to finalize.'}])
    }
    if(type==='meeting'){
      await fetch(`${BACKEND}/api/meetings`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name:'Site Visitor', email:'visitor@example.com', date:'Next Tuesday', time:'10:00', topic:'Project discussion'})});
      setMessages(prev=>[...prev, {role:'bot', text:'Meeting request submitted. We will confirm by email.'}])
    }
  }

  return (
    <div>
      <button onClick={()=>setOpen(!open)} className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xl flex items-center gap-2">
        <Bot size={18}/> Chat
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[92vw] sm:w-96 rounded-xl overflow-hidden border border-white/10 bg-slate-900/95 backdrop-blur">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white"><Bot size={18}/> Assistant</div>
            <div className="flex items-center gap-2">
              <button onClick={()=>quick('meeting')} className="text-xs text-slate-300 hover:text-white inline-flex items-center gap-1"><Calendar size={14}/> Book</button>
              <button onClick={()=>quick('order')} className="text-xs text-slate-300 hover:text-white inline-flex items-center gap-1"><ShoppingCart size={14}/> Order</button>
            </div>
          </div>
          <div ref={listRef} className="h-80 overflow-y-auto p-4 space-y-2">
            {messages.map((m,i)=> (
              <div key={i} className={m.role==='user'? 'text-right' : 'text-left'}>
                <div className={`inline-block px-3 py-2 rounded-lg text-sm ${m.role==='user' ? 'bg-orange-600 text-white' : 'bg-white/10 text-white'}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-white/10 flex items-center gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=> e.key==='Enter' && send()} placeholder="Type your message..." className="flex-1 bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white" />
            <button onClick={send} className="px-3 py-2 rounded-md bg-orange-600 text-white"><Send size={16}/></button>
          </div>
        </div>
      )}
    </div>
  )
}
