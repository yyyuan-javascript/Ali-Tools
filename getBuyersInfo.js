const getBuyersInfos = () => {
  const eyeAdds = document.querySelectorAll(".receive-info img");
eyeAdds.forEach((item) => item.click());
const seeMoreBtns = document.querySelectorAll(".J_ConsignTrigger th");
seeMoreBtns.forEach((item) => item.click());

let result = [];
setTimeout(()=>{
    const tables = document.querySelectorAll('.consign-detail');
try{
  tables.forEach((item) => {
    const orderId = item.querySelector(".order-number").innerHTML;
    const orderName = item.querySelector(".order-name span").innerHTML;
    const add = item.querySelector(".receive-info div span").innerHTML;
    const price = item.querySelector(".total span").innerHTML.trim();
    const sku = item.querySelector(".attrs span span").innerHTML;
    result.push([orderId, orderName,sku,price,add]);
  });
}catch(e){
  console.log(e);
}
console.log(result);
},2000);
};
getBuyersInfos();
