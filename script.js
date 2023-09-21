
//Redirection to this page
let btn = document.getElementById("test");

btn.addEventListener('click', function (e){
window.location.href='index.php';
});

//Sorting
table.onclick = function(e){
  if(e.target.tagName != 'TH') return
    let th = e.target
  sortTable(th.cellIndex, th.dataset.type)
}

function sortTable(colNum, type) {
  let tbody = table.querySelector('tbody')
  let rowsArray = Array.from(tbody.rows)
  let compare;
  switch (type){
    case 'number':
    compare = function(rowA, rowB){
      return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
    }
    break;
    case 'string':
    compare = function(rowA, rowB){
       return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
    }
    break;
  }
  rowsArray.sort(compare)
  tbody.append(...rowsArray)
}

//Add total price and amount
let total = document.createElement("tr")
let td = document.createElement("td")

total.appendChild(td)
total.innerHTML = `<td class='bold'>Итого</td><td></td><td></td><td></td>`
td.innerHTML = 'Итого'
table.appendChild(total)

function addTotal(){
let lastRow = table.rows[table.rows.length - 1];

for (var i = 1; i < table.rows.length - 1; i++) {
  let row = table.rows[i];
  
  for (var j = 1; j < row.cells.length; j++) {
    let cel = row.cells[j];
console.log(cel)
    lastRow.cells[j].innerText =
      (Number(lastRow.cells[j].innerText) || ' ') + 
      (Number(cel.innerText) || ' ');
  }
}
}
addTotal()

//Create button for sum
let btnSum = document.createElement("button")
btnSum.innerHTML = 'Подсчитать' 
document.body.appendChild(btnSum)

//Count sum with removed rows
btnSum.addEventListener("click", function() {
let lastRow = table.rows[table.rows.length - 1];
lastRow.cells[2].innerText = 0
lastRow.cells[3].innerText = 0
addTotal()
})

//Remove cells
const cells = document.querySelectorAll("tr")
for(let i=1; i<=cells.length-2;i++){
  cells[i].addEventListener("click", function() {
    cells[i].remove()
}
)}

//Tooltip innerhtml
for(let i=1; i<cells.length;i++){
  cells[i].setAttribute('data-title', `${cells[i].textContent}`)
}