function importWhatsCSS() {
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", "./src/css/fixed-whats.css");
  document.head.appendChild(link);
}

function createFixedWhats() {
  const divScripts = document.querySelector("#scripts");
  const tag_i = document.createElement("i");
  const tag_a = document.createElement("a");
  
  let whatsText = "Olá, desejo fazer um pedido de produtos!";
  
  tag_i.classList.add("fab");
  tag_i.classList.add("fa-whatsapp");
  tag_i.classList.add("my-float");
  
  tag_a.id = "whats";
  tag_a.setAttribute("href", `https://api.whatsapp.com/send?phone=5511985681416&text=${whatsText}`);
  tag_a.setAttribute("target", "_blank");
  tag_a.appendChild(tag_i);

  divScripts.appendChild(tag_a);

  importWhatsCSS();
}

createFixedWhats();