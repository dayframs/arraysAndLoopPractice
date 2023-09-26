let arr = [
     {
         name: 'Ade',
         school: 'UI',
         dept: 'engineering'
},
{
     name: 'Ola',
     school: 'UNILAG',
     dept: 'MEDICINE'
},
{
     name: 'Kemi',
     school: 'OAU',
     dept: 'SCIENCES'
}
     ]; 
function displayArray() {
     arrayResult.innerHTML = '';
     for (let i = 0; i < arr.length; i++) { 
     console.log(arr[i].name);
          arrayResult.innerHTML += arr[i].name + ' ' + arr[i].school + ' ' + arr[i].dept + '<br>';
          myName.value = '';
          school.value = '';
          dept.value = '';
}
}
displayArray();

let obj;

function addNew() {
          let p = myName.value;
          let q = school.value;
          let r = dept.value;
          obj = {
               name: p,
               school: q,
               dept: r
          }
     arr.push(obj);
     displayArray();
}
function deleteA(){
     arr.pop(obj);
     displayArray();
}

