import { writable } from "svelte/store";

const sync = (newArray) => {
  let orders = JSON.stringify(newArray);
  let totalprice = 0;

  newArray.forEach((order) => {
    console.log(order.amount);
    totalprice = totalprice + order.amount * 45;
    console.log(totalprice);
    let totalPriceString = JSON.stringify(totalprice);
    localStorage.setItem("totalPrice", totalPriceString);
  });
  localStorage.setItem("orderBasket", orders);
};

let contents = [];
let _contents = localStorage.getItem("orderBasket");
if (_contents) {
  contents = JSON.parse(_contents);
}
sync(contents);
console.log(contents);

function createCart() {
  const { subscribe, set, update } = writable(contents);
  return {
    subscribe,
    add: (obj) =>
      update((cart) => {
        const cartCopy = [...cart];
        const index = cartCopy.findIndex((element) => element.name == obj.name);
        if (index == -1) {
          console.log(obj);
          obj.amount = 1;
          console.log(cartCopy);
          cartCopy.push(obj);
        } else {
          cartCopy[index].amount += 1;
        }
        sync(cartCopy);
        return cartCopy;
      }),
    reset: () => set([]),
    minusOne: (obj) =>
      update((cart) => {
        const cartCopy = [...cart];
        const productQty = cartCopy.find(
          (element) => element.name == obj.name
        ).amount;
        if (productQty > 1) {
          const indexObj = cartCopy.findIndex(
            (element) => element.name == obj.name
          );
          cartCopy[indexObj].amount--;
        } else if (productQty === 1) {
          const indexObj = cartCopy.findIndex(
            (element) => element.name == obj.name
          );
          cartCopy[indexObj].amount = 0;
          cartCopy.splice(indexObj, 1);
        }
        sync(cartCopy);
        return cartCopy;
      }),
  };
}
export const cart = createCart();
