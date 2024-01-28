
const express = require('express');
const app = express();
const port = 2024;


let numerosEmergencia = [
    {180 : "Central de Atendimento à Mulher"},
    {100 : "Denúncias de violações de direitos humanos"},
    {190 : "Polícia Militar"},
]

let livrosAjudaParaMulheres = [
    {Biografia : "Onde Está Você? - Laura Pires"},
    {AutoAjuda : "A Culpa Não É Sua: Libertando-se da Vergonha que Aprisiona - Beverly Engel"},
    {Educação : "Quem Ama, Educa! - Içami Tiba"},
    {História : "A Garota que Semeava Estrelas - Clarissa Pinkola Estés" }
]

let centrosReferencia = [
    {CRM : "Centro de Referência da Mulher"},
    {CDCM : "Centro de Defesa da Criança e do Adolescente"},
    {CEAM : "Centro Especializado de Atendimento à Mulher"},
    {CAM : "Casa da Mulher"},
    {CRAM : "Centro de Referência de Atendimento à Mulher"},
    {CRAMV: "Centro Integrado de Atendimento à Mulher"},
    {CIAM : "Centro de Referência de Atendimento à Mulher em Situação de Violência"}

]

app.get('/', (req, res) => {
    res.send("Por Favor escolha entre os caminhos : /emergency /library ou /help")
})

app.get('/emergency', (req, res) => {
    res.json({numerosEmergencia})
})

app.get('/library', (req, res) => {
    res.json({livrosAjudaParaMulheres})
})

app.get('/help', (req, res) => {
    res.json({centrosReferencia})
})


app.listen(port, () => {
console.log('nodemon')
})
