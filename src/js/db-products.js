class Product {
  constructor(id, brand, productCode, discount, value, installments) {
    this.id = id;
    this.brand = brand;
    this.productCode = productCode;
    this.discount = discount;
    this.value = value;
    this.installments = installments;
  }

  texts(description, title) {
    this.description = description;
    this.title = title;
  }

  image(imgName, alt) {
    this.imgName = imgName;
    this.imgSrc = `https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/${this.productCode}/${imgName}`;
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
const tb_divaProducts = [];

tb_divaProducts[0] = new Product(id++, "Diva", "E47214", 0, 108.90, 7);
tb_divaProducts[0].texts("O Kit Diva Miniaturas Eudora reúne as fragrâncias mais incríveis da linha para você presentear quem ama.", "Kit Presente Miniaturas (2 itens)");
tb_divaProducts[0].image("ESTOJO_DIVA_MINIATURAS_E47214.jpg", "Estojo Diva com dois produtos em Miniaturas");

id = 1100;
const tb_siageProducts = [];

tb_siageProducts[0] = new Product(id++, "Siàge", "E2022081302", 127.98, 112.98, 7);
tb_siageProducts[0].texts("O combo contém produtos que entregam fios saudáveis e livres de pontas duplas por meio de ativos poderosos.", "Combo Nutri Rose: Shampoo 400ml + Condicionador 400ml");
tb_siageProducts[0].image("E2022081302_SIAGE_nutri_rose_shamp_cond", "Combo Nutri Rose");

tb_siageProducts[1] = new Product(id++, "Siàge", "E2023040741", 0, 98.98, 6);
tb_siageProducts[1].texts("O Combo Refil Siàge Nutri Rosé é ideal para quem não abre mão de fios saudáveis, hidratados e nutridos.", "Combo Refil Nutri Rosé: Shampoo 400ml + Condicionador 400ml");
tb_siageProducts[1].image("ED_E2023040741_SIAGE-NUTRI-ROSE_REFIL_SHAMPOO_CONDICIONADOR_FRONTAL_1", "Combo Refil Nutri Rosé");

tb_siageProducts[2] = new Product(id++, "Siàge", "E01644", 0, 67.99, 4);
tb_siageProducts[2].texts("Para uma plástica capilar instantânea e fios extremamente macios, conheça a Máscara Capilar Hair-Plastia.", "Máscara Capilar Hair-Plastia 250G");
tb_siageProducts[2].image("Siage-Mascara-Capilar-Hair-Plastia-E01644_", "Máscara Capilar Hair-Plastia 250G");

tb_siageProducts[3] = new Product(id++, "Siàge", "E2021101403", 0, 147.97, 9);
tb_siageProducts[3].texts("Com Bio-Hialurônico, os produtos agem em todas as camadas dos fios deixando o cabelo brilhante e macio.", "Combo Hair Plastia Shampoo + Máscara + Condicionador");
tb_siageProducts[3].image("E2021101403", "Siage Hair Plastia");

tb_siageProducts[4] = new Product(id++, "Siàge", "E2022020202", 0, 147.97, 9);
tb_siageProducts[4].texts("Com ingredientes poderosos, o combo traz 3 produtos que recupera o cabelo dos danos com a terapia capilar.", "Combo Cica-Therapy: Shampoo + Condicionador + Máscara Capilar");
tb_siageProducts[4].image("E2022020202-Combo-Siage-Cica-Therapy_Shampoo_Cond_Mascara_", "Combo Siage Cica Therapy");

tb_siageProducts[5] = new Product(id++, "Siàge", "E2023040742", 0, 120.98, 8);
tb_siageProducts[5].texts("O Combo Siàge Reconstrói os Fios entrega cabelos reconstruídos e resistentes à quebra desde o primeiro uso.", "Combo Reconstrói os Fios: Shampoo 400ml + Condicionador 400ml");
tb_siageProducts[5].image("ED_E2023040742_SIAGE-NUTRI-ROSE_MASCARA_SHAMPOO_CONDICIONADOR_FRONTAL_", "Combo Reconstrói os Fios");

tb_siageProducts[6] = new Product(id++, "Siàge", "E2023040619", 217.96, 197.96, 10);
tb_siageProducts[6].texts("O Combo Siàge Reconstrói os Fios entrega em quatro itens limpeza e condicionamento intenso para seus fios.", "Combo Reconstrói os Fios (4 itens)");
tb_siageProducts[6].image("E2023040619_SIAGE_RECONSTROI_OS_FIOS_REFIL_SHAMPOO_CONDICIONADOR_PRINCIPAL_1", "Combo de 4 itens da linha Reconstrói os Fios");

tb_siageProducts[7] = new Product(id++, "Siàge", "E47364", 0, 67.99, 4);
tb_siageProducts[7].texts("Máscara para cabelos danificados. Recupera os danos e repõe nutrientes essenciais garantindo cabelos fortes.", "Eudora Cica Therapy - Máscara Capilar 250g");
tb_siageProducts[7].image("SIAGE-MASCARA-CAPILAR-CICA-THERAPY-250G-E47364_", "Máscara Capilar Cica Theray");

tb_siageProducts[8] = new Product(id++, "Siàge", "E92606", 67.99, 59.99, 4);
tb_siageProducts[8].texts("Máscara Siàge Acelera o Crescimento tem ação antiquebra imediata, fios 6x mais resistentes e ultra hidratados.", "Máscara Capilar Acelera o Crescimento 250g (Nova Versão)");
tb_siageProducts[8].image("E92606_a", "Nova versão da Máscara Capilar Acelera o Crescimento");

tb_siageProducts[9] = new Product(id++, "Siàge", "E93056", 0, 67.99, 4);
tb_siageProducts[9].texts("A Máscara Capilar Siàge Cauterização dos Fios garante Cauterização Capilar profissional, reduz a porosidade dos fios e deixa os cabelos 3x mais macios.", "Máscara Capilar Cauterização dos Fios 250g");
tb_siageProducts[9].image("Mascara-Capilar-Siage-Cauterizacao-dos-Fios-250g_93056_fechada", "Máscara Capilar - Cauterização dos Fios");

tb_siageProducts[10] = new Product(id++, "Siàge", "E93105", 0, 68.99, 4);
tb_siageProducts[10].texts("Recupere a elasticidade dos fios já no 1° uso com a Máscara Capilar de Resgate Siàge Nutri Óleos Poderosos!", "Máscara Capilar Nutri Óleos Poderosos 250g");
tb_siageProducts[10].image("SIAGE_OLEOS_PODEROSOS_MASCARA_CAPILAR_E93105", "Máscara Capilar Nutri Óleos Poderosos");

export const allTables = tb_divaProducts.concat(tb_siageProducts);