/* tipo de tela escolhido neste aparelho (celular ou computador): vale antes de desenhar a página.
   Fica em arquivo próprio (e não dentro do index.html) para a política de segurança do site não precisar liberar script embutido. */
(function () {
  try {
    var m = localStorage.getItem("eh-mode");
    if (m === "pc" || m === "mobile") {
      document.documentElement.setAttribute("data-mode", m);
      if (m === "pc") document.querySelector('meta[name="viewport"]').setAttribute("content", "width=1180");
    }
  } catch (e) {}
})();
