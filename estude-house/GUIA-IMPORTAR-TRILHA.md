# Importar uma trilha pronta (.json)

Em **Gestão de trilhas** há o botão **Importar trilha pronta (.json)**. Ele cria uma trilha nova, como **rascunho**, a partir de um arquivo. Nada aparece para os alunos até você clicar em **Publicar**.

## Passo a passo

1. Publique esta versão do site (zip no GitHub, como sempre). As imagens da trilha vão junto, em `public/trilhas/<nome>/img/`.
2. Confira em `/api/health` que o campo `build` mostra `2026-10-18-h` ou mais novo.
3. Entre como gestor, abra **Gestão de trilhas** e clique em **Importar trilha pronta (.json)**.
4. Escolha o arquivo da pasta `trilhas-prontas/` (por exemplo `funil-de-vendas-ml.json`).
5. O editor abre sozinho. Use **Ver aula como aluno**, ajuste o que quiser e clique em **Publicar**.
6. Depois de publicar, use **Quem vê** para definir a turma.

Importar duas vezes cria duas trilhas. Para descartar uma, use **Excluir** no cartão dela.

## O que vem no arquivo

`{ "formato": "estude-house-trilha", "versao": 1, "draft": { título, módulos, aulas, cards, questões das provas } }`

É o mesmo formato que o editor salva. O servidor limpa tudo na importação (HTML permitido, limites de tamanho, links), então um arquivo com erro não quebra o site.

## Imagens

Os cards de imagem podem apontar para `/trilhas/<pasta>/<arquivo>.jpg` (arquivos que vão no site) ou para um link `https://` (Cloudinary, por exemplo). Caminhos com `..` e outros formatos são descartados.

## Trilhas prontas nesta pasta

| Arquivo | Conteúdo |
| --- | --- |
| `funil-de-vendas-ml.json` | Funil de Vendas no Mercado Livre: 5 módulos, 7 aulas, 94 cards, 17 questões de módulo e 10 da prova final (sorteia 15). 7 imagens do treinamento em PDF, com os nomes do ranking borrados. |
