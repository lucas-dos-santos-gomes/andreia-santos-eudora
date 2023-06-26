
let bd_localStorage = []; // console.table(JSON.parse(localStorage.tb_bag));

export function createLocalStorage(id) {
  bd_localStorage.push({id: id, qtd: 1});
  localStorage.setItem("tb_bag", JSON.stringify(bd_localStorage));
}

export function readLocalStorage(addBag, tables, list, btn) {
  let initialPrice = 0;
  if(localStorage.tb_bag) {
    const TABLE_STORAGE = JSON.parse(localStorage.tb_bag);
    TABLE_STORAGE.forEach(register => {
      initialPrice = addBag(register.id, tables, list, initialPrice, btn, register.qtd);
    });
  }
  return initialPrice;
}

export function updateLocalStorage(id, qtd) {
  let bdIdTest = bd_localStorage.filter(e => e.id == id);
  bd_localStorage[bd_localStorage.indexOf(bdIdTest[0])].qtd = qtd;
  localStorage.setItem("tb_bag", JSON.stringify(bd_localStorage));
}

export function deleteLocalStorage(id) {
  bd_localStorage = bd_localStorage.filter(e => e.id != id);
  if(bd_localStorage.length == 0) {
    localStorage.removeItem("tb_bag");
  } else {
    localStorage.setItem("tb_bag", JSON.stringify(bd_localStorage));
  }
}