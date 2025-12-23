
fetch('/api/produtos').then(r=>r.json()).then(d=>{
 const m=document.getElementById('produtos');
 d.forEach(p=>{
  m.innerHTML+=`<div class="card"><img src="${p.img}"><h3>${p.nome}</h3><p>R$ ${p.preco}</p><button onclick="location.href='/checkout.html'">Comprar</button></div>`
 })
})
