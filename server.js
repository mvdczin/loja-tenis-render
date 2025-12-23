
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const produtos = [
 {id:1,nome:"Nike Air Max",preco:599,img:"/img/airmax.jpg"},
 {id:2,nome:"Nike TN",preco:649,img:"/img/tn.jpg"},
 {id:3,nome:"Nike Shox",preco:699,img:"/img/shox.jpg"}
];

app.get('/api/produtos',(req,res)=>res.json(produtos));

app.post('/api/chat',(req,res)=>{
 const m=req.body.message.toLowerCase();
 if(m.includes("entrega")) return res.json({reply:"📦 Sob encomenda. Prazo até 90 dias."});
 if(m.includes("frete")) return res.json({reply:"🚚 Frete pago, valor informado após pedido."});
 if(m.includes("pix")||m.includes("pagamento")) return res.json({reply:"💰 Pagamento somente via PIX."});
 if(m.includes("seguro")) return res.json({reply:"🔒 Pedido com seguro contra extravio."});
 res.json({reply:"👟 Loja de tênis sob encomenda. Pergunte sobre entrega, frete, pagamento ou seguro."});
});

app.post('/api/pix',(req,res)=>{
 res.json({pix:"00020126360014BR.GOV.BCB.PIX0114+5599999999995204000053039865802BR5920LOJA TENIS6009SAO PAULO6304ABCD"});
});

app.listen(process.env.PORT||3000);
