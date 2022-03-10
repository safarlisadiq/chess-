let cedvel = document.getElementById('tbl');
// let inp = document.getElementById("inp");
let select = document.getElementById('selc');

cedvel.style.display = 'none';


function table(){
    cedvel.style.display = 'table';
    let tbl = '';
    for(let i = 0; i<selc.value; i++){
      tbl += `<tr>`;

      for(let j = 0; j<selc.value; j++)
    
      {
          // let color = (i+j)%2 == 0 ? 'black' : '';
          let color = (i==j || i+j==select.value-1) ? 'black' : '' ;
          tbl += `<td style="background-color:${color}"> ${i} ${j} </td>`;
      }

      tbl += `</tr>`;
    }
    cedvel.innerHTML = tbl;
}


