
const express=require('express');
const path=require('path');
const app=express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.post('/api/generate',(req,res)=>{
 res.json({
  result:`🏛️ CIVILIZATION: AURELIA

🌍 Location: The Shattered Desert

👑 Ruler: Emperor Solis IV

📜 Myth:
The stars were believed to be fragments of a broken god.

⚙️ Technology:
Crystal-powered navigation towers.

💀 Collapse:
A century-long eclipse triggered famine and civil war.

🏺 Artifact:
The Sun Codex`
 });
});

app.listen(3000,()=>console.log('AI Lost Civilization running at http://localhost:3000'));
