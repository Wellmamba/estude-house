// Mensagem do dia: um aviso curto, com tom de curiosidade, chamando a pessoa para abrir o app.
// Todo dia útil sai uma mensagem diferente; as 42 se repetem só depois de seis semanas.
// Para trocar o texto de uma mensagem basta editar aqui. Mantenha título até 70 e texto até 140 letras.
export const DAILY = [
  ["A reforma tributária pode ser o seu tema de reunião de amanhã 👀", "Dê uma olhada na trilha de Fiscal antes de o cliente perguntar.", "#/trilhas"],
  ["Não fique sem o check-in de hoje ⚡", "Leva 5 segundos, rende XP e mantém a sua sequência de pé.", "#/"],
  ["Tem Reels novo? Vai que salva o seu dia 🎬", "Às vezes um vídeo de um minuto é tudo o que faltava. Dá uma olhada.", "#/reels"],
  ["Será que você sabe a resposta? 🤔", "Uma prova rápida mostra o que vale revisar antes da próxima reunião.", "#/trilhas"],
  ["Quem está no topo do ranking hoje? 🏆", "Abra e descubra. Talvez dê para subir uma posição ainda hoje.", "#/ranking"],
  ["A Black Friday não espera 🛒", "Que tal revisar hoje preço, estoque e Ads antes da correria?", "#/trilhas"],
  ["Alguém do time postou uma novidade", "Passe no Feed: avisos, cases e dicas que podem valer a sua tarde.", "#/"],
  ["Quanto vale um ponto de ACOS? 📉", "A trilha de Promoções e Ads responde com exemplos em poucos minutos.", "#/trilhas"],
  ["Ficou alguma dúvida da semana?", "A busca encontra as listas úteis do Fórum antes de você precisar perguntar.", "#/busca"],
  ["Seu certificado pode estar mais perto do que você pensa 🎓", "Veja em quais trilhas falta pouco para fechar.", "#/cert"],
  ["Curva ABC: de que lado está o seu cliente?", "Uma aula de Preço ajuda a decidir onde agir primeiro.", "#/trilhas"],
  ["Cinco minutos hoje, menos retrabalho amanhã ⏱️", "Escolha uma aula curta e feche o dia na frente.", "#/trilhas"],
  ["Full e envios: você domina isso? 📦", "A trilha de Logística tem um jeito rápido de testar o que você já sabe.", "#/trilhas"],
  ["Já pensou em uma Live na Shopee? 🎥", "Tem uma trilha inteira esperando por você, com passo a passo.", "#/trilhas"],
  ["TikTok Shop está na pauta 🎵", "Uma aula pode render assunto novo para a próxima conversa com o cliente.", "#/trilhas"],
  ["O PriceBot pode te poupar uma conta hoje 🤖", "Veja na trilha como usar e ganhe tempo.", "#/trilhas"],
  ["O que o time compartilhou hoje?", "Tem gente contando caso real. Passa no Feed e leva uma ideia.", "#/"],
  ["Dados contam histórias 📊", "Uma aula de Dados pode mudar o jeito de apresentar o resultado.", "#/trilhas"],
  ["Como dar uma notícia ruim ao cliente?", "A trilha de Comunicação tem um caminho. Vale ler antes da próxima call.", "#/trilhas"],
  ["Um minuto nos Reels pode render um insight 💡", "Aperta o play e vê se aparece algo que você vai usar hoje.", "#/reels"],
  ["Sua sequência está viva? 🔥", "Quem faz check-in todo dia ganha bônus. Falta só abrir o app.", "#/"],
  ["Falta pouco para fechar um módulo?", "Abra as Trilhas e veja onde você parou.", "#/trilhas"],
  ["Hoje é um bom dia para tirar uma dúvida", "Pergunte no Feed ou procure no Fórum. O time costuma responder.", "#/busca"],
  ["Será que alguém passou você no ranking? 😏", "Abra e confira. A resposta pode te dar motivo para estudar hoje.", "#/ranking"],
  ["Tem coisa nova por aqui ✨", "Dá um pulo no Feed e veja o que a equipe publicou.", "#/"],
  ["Antes da reunião, uma revisão de três minutos", "Escolha uma aula e chegue com um argumento a mais.", "#/trilhas"],
  ["Título de anúncio é ciência ou palpite? 🔍", "A trilha de Anúncios mostra como pensar nisso com método.", "#/trilhas"],
  ["Promoção boa nem sempre é a de maior desconto", "Veja na trilha o que realmente protege a margem.", "#/trilhas"],
  ["Você sabe o que é margem de contribuição?", "Tire esse assunto da frente com uma aula de Preço.", "#/trilhas"],
  ["O cliente perguntou e você já sabia 😎", "É o que acontece com uma aula por dia. Escolha a de hoje.", "#/trilhas"],
  ["Desafio do dia: uma aula, um check-in e um hype", "Feche o dia com o app em dia. Topa?", "#/"],
  ["Hype dado, hype recebido 🚀", "Passe no Feed e reconheça o post de alguém do time.", "#/"],
  ["Prova pendente? ✍️", "Dez minutos de atenção hoje liberam o próximo passo da trilha.", "#/trilhas"],
  ["Os melhores times estudam um pouco todo dia", "Que tal abrir uma aula agora e deixar o resto do dia mais leve?", "#/trilhas"],
  ["O que a Shopee e o Mercado Livre têm de diferente? 🤝", "Uma aula curta ajuda a explicar isso ao cliente sem enrolar.", "#/trilhas"],
  ["Seu perfil já está com a sua cara? 📸", "Foto e apelido ajudam o time a te reconhecer no Feed.", "#/voce"],
  ["Tem Reels que dura menos que um café ☕", "Dá para aprender algo enquanto a água esquenta.", "#/reels"],
  ["E se a próxima ideia estiver numa aula que você ainda não fez?", "Abra as Trilhas e escolha uma ao acaso.", "#/trilhas"],
  ["Hoje alguém do time vai precisar da sua ajuda", "Quem estuda ajuda melhor. Faça uma aula e fique pronto.", "#/trilhas"],
  ["Um ponto a mais no ranking começa com um clique 👆", "Entre, faça o check-in e veja onde você está.", "#/ranking"],
  ["Já viu o que mudou no Feed esta semana?", "Passe por lá e fique por dentro antes da reunião.", "#/"],
  ["Falta um módulo para fechar a trilha?", "Entre agora e descubra quanto falta. Pode ser menos do que parece.", "#/trilhas"],
];

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
// Número do dia (dias desde 1970) a partir de "AAAA-MM-DD"
export const dayNumber = (key) => { const [y, m, d] = key.split("-").map(Number); return Math.floor(Date.UTC(y, m - 1, d) / 864e5); };
const STRIDE = [5, 11, 13, 17, 19].find((s) => gcd(s, DAILY.length) === 1);

// Escolhe a mensagem de um dia: dias seguidos nunca repetem e todas aparecem antes de repetir.
export function pickDaily(dayKey) {
  const [title, body, url] = DAILY[(dayNumber(dayKey) * STRIDE) % DAILY.length];
  return { title, body, url: "/" + url, tag: "daily" };
}
