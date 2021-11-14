// const getLongComments = () => {
//     let result = [];
// const commentsNode = document.querySelectorAll('.tm-rate-fulltxt');
// commentsNode.forEach(item=>{const txt =item.innerHTML;if(txt.length>55){result.push(txt);}});
// console.log(result);
// };
// getLongComments();
const getLongComments = () => {
    let result = [];
const commentsNode = document.querySelectorAll('.tb-tbcr-content');
commentsNode.forEach(item=>{const txt =item.innerHTML.trim();if(txt.length>35){result.push(txt);}});
console.log(result);
};
getLongComments();