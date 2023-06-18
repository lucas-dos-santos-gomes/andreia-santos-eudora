class Product {
  constructor(id, brand, discount, value, installments) {
    this.id = id;
    this.brand = brand;
    this.discount = discount;
    this.value = value;
    this.installments = installments;
  }

  texts(description, title) {
    this.description = description;
    this.title = title;
  }

  image(src, alt) {
    this.imgSrc = src;
    this.imgAlt = alt;
  }

  convertToString(number) {
    let string = number.toString();
    return string.replace(".", ",");
  }

  installmentCost() {
    let division = (this.value / this.installments).toFixed(2);
    return `${this.installments}x de R$ ${this.convertToString(division)}`;
  }
}

let id = 1000;

export const tb_divaProducts = [];

tb_divaProducts[0] = new Product(id++, "Diva", 0, 108.90, 7);
tb_divaProducts[0].texts("O Kit Diva Miniaturas Eudora reúne as fragrâncias mais incríveis da linha para você presentear quem ama.", "Kit Presente Miniaturas (2 itens)");
tb_divaProducts[0].image("./src/img/products/estojo_diva_miniaturas.jpg", "Estojo Diva com dois produtos em Miniaturas");

id = 1100;

export const tb_siageProducts = [];

tb_siageProducts[0] = new Product(id++, "Siàge", 127.98, 112.98, 7);
tb_siageProducts[0].texts("O combo contém produtos que entregam fios saudáveis e livres de pontas duplas por meio de ativos poderosos.", "Combo Nutri Rose: Shampoo 400ml + Condicionador 400ml");
tb_siageProducts[0].image("./src/img/products/siage_nutri_rose_shamp_cond.jpg", "Combo Nutri Rose");

tb_siageProducts[1] = new Product(id++, "Siàge", 0, 98.98, 6);
tb_siageProducts[1].texts("O Combo Refil Siàge Nutri Rosé é ideal para quem não abre mão de fios saudáveis, hidratados e nutridos.", "Combo Refil Nutri Rosé: Shampoo 400ml + Condicionador 400ml");
tb_siageProducts[1].image("./src/img/products/siage-nutri-rose_refil_shampoo_condicionador_frontal_1.jpg", "Combo Refil Nutri Rosé");

/*
  {
    id: id++,
    brand: "Siàge",
    description: "Para uma plástica capilar instantânea e fios extremamente macios, conheça a Máscara Capilar Hair-Plastia.",
    imgSrc: "./src/img/products/siage-mascara-capilar-hair-plastia.jpg",
    imgAlt: "Máscara Capilar Hair-Plastia 250G",
    title: "Máscara Capilar Hair-Plastia 250G",
    discount: 0,
    value: 67.99,
    installments: 4,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "Com Bio-Hialurônico, os produtos agem em todas as camadas dos fios deixando o cabelo brilhante e macio.",
    imgSrc: "./src/img/products/siage-hair-plastia_shampoo-condicionador.jpg",
    imgAlt: "Siage Hair Plastia",
    title: "Combo Hair Plastia Shampoo + Máscara + Condicionador",
    discount: 0,
    value: 147.97,
    installments: 9,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "Com ingredientes poderosos, o combo traz 3 produtos que recupera o cabelo dos danos com a terapia capilar.",
    imgSrc: "./src/img/products/combo-siage-cica-therapy_shampoo_condicionador_mascara_.jpg",
    imgAlt: "Combo Siage Cica Therapy",
    title: "Combo Cica-Therapy: Shampoo 250ml + Condicionador 200ml + Máscara Capilar 250g",
    discount: 0,
    value: 147.97,
    installments: 9,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "O Combo Siàge Reconstrói os Fios entrega cabelos reconstruídos e resistentes à quebra desde o primeiro uso.",
    imgSrc: "./src/img/products/siage_reconstroi-fios_shamp_cond.jpg",
    imgAlt: "Combo Reconstrói os Fios",
    title: "Combo Reconstrói os Fios: Shampoo 400ml + Condicionador 400ml",
    discount: 0,
    value: 120.98,
    installments: 8,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "O Combo Siàge Reconstrói os Fios entrega em quatro itens limpeza e condicionamento intenso para seus fios.",
    imgSrc: "./src/img/products/siage_reconstroi_os_fios_refil_shampoo_condicionador_principal_1.jpg",
    imgAlt: "Combo Reconstrói os Fios (4 itens)",
    title: "Combo Reconstrói os Fios (4 itens)",
    discount: 217.96,
    value: 197.96,
    installments: 10,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "Máscara para cabelos danificados. Recupera os danos e repõe nutrientes essenciais garantindo cabelos fortes.",
    imgSrc: "./src/img/products/siage-mascara-capilar-cica-therapy-250g.jpg",
    imgAlt: "Máscara Capilar Cica Theray",
    title: "Eudora Cica Therapy - Máscara Capilar 250g",
    discount: 0,
    value: 67.99,
    installments: 4,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "Máscara Siàge Acelera o Crescimento tem ação antiquebra imediata, fios 6x mais resistentes e ultra hidratados.",
    imgSrc: "./src/img/products/siage-acelera-o-crescimento_a.jpg",
    imgAlt: "Nova versão da Máscara Capilar Acelera o Crescimento",
    title: "Máscara Capilar Acelera o Crescimento 250g (Nova Versão)",
    discount: 67.99,
    value: 59.99,
    installments: 4,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "A Máscara Capilar Siàge Cauterização dos Fios garante Cauterização Capilar profissional, reduz a porosidade dos fios e deixa os cabelos 3x mais macios.",
    imgSrc: "./src/img/products/mascara-capilar-siage-cauterizacao-dos-fios-250g_fechada.jpg",
    imgAlt: "Máscara Capilar - Cauterização dos Fios",
    title: "Máscara Capilar Cauterização dos Fios 250g",
    discount: 0,
    value: 67.99,
    installments: 4,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "Recupere a elasticidade dos fios já no 1° uso com a Máscara Capilar de Resgate Siàge Nutri Óleos Poderosos!",
    imgSrc: "./src/img/products/siage_oleos_poderosos_mascara_capilar.jpg",
    imgAlt: "Máscara Capilar Nutri Óleos Poderosos",
    title: "Máscara Capilar Nutri Óleos Poderosos 250g",
    discount: 0,
    value: 68.99,
    installments: 4,
  },
  {
    id: id++,
    brand: "Siàge",
    description: "",
    imgSrc: "./src/img/products/.jpg",
    imgAlt: "",
    title: "",
    discount: 0,
    value: 0,
    installments: 0,
  },
*/

/*
tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);

tb_siageProducts[x] = new Product(id++, "Siàge");
tb_siageProducts[x].texts("", "");
tb_siageProducts[x].image("./src/img/products/.jpg", "");
tb_siageProducts[x].values(0, 0, 1);
*/