// let arr = [
//      {
//          name: 'Ade',
//          school: 'UI',
//          dept: 'engineering'
// },
// {
//      name: 'Ola',
//      school: 'UNILAG',
//      dept: 'MEDICINE'
// },
// {
//      name: 'Kemi',
//      school: 'OAU',
//      dept: 'SCIENCES'
// }
//      ]; 
// function displayArray() {
//      arrayResult.innerHTML = '';
//      for (let i = 0; i < arr.length; i++) { 
//      console.log(arr[i].name);
//           arrayResult.innerHTML += arr[i].name + ' ' + arr[i].school + ' ' + arr[i].dept + '<br>';
//           myName.value = '';
//           school.value = '';
//           dept.value = '';
// }
// }
// displayArray();

// let obj;

// function addNew() {
//           let p = myName.value;
//           let q = school.value;
//           let r = dept.value;
//           obj = {
//                name: p,
//                school: q,
//                dept: r
//           }
//      arr.push(obj);
//      displayArray();
// }
// function deleteA(){
//      arr.pop(obj);
//      displayArray();
// }

let m;
let g;
let a;
let c;
let am;
let num;
let card;
let re;

let array = [mtn, glo, airtel];

function displayCard() {
     // result.innerHTML = '';
     for (let i = 0; i < number.value; i++){
          result.innerHTML += company.value + ' ' + amount.value + ' ' + Math.ceil(Math.random() * 100000000) + '<br>';
          console.log(result.innerHTML);
     }
}    

displayCard();

function createCard() {
     m = mtn.value;
     g = glo.value;
     a = airtel.value;
     c = company.value;
     am = amount.value;
     num = number.value;
     re = result.innerHTML;
     card = {
          company: c,
          amount: am,
          number: num
     }
     array.push(card);
     displayCard();
     amount.value = '';
     number.value = '';
}
// function deleteCard(){
//      array.pop(card);
//      displayCard();
// }