
const i=document.getElementById('chatInput');
const m=document.getElementById('msgs');
function add(t){m.innerHTML+=`<p>${t}</p>`;m.scrollTop=m.scrollHeight}
add("👋 Atendimento automático. Pergunte sobre entrega, frete, pagamento ou seguro.");
i.addEventListener('keypress',e=>{
 if(e.key==='Enter'){
  fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:i.value})})
  .then(r=>r.json()).then(d=>add(d.reply));i.value='';
 }
})
