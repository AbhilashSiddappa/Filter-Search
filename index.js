function searchFunc(){
    let filter =document.getElementById("myInput").value.toUpperCase();
    console.log(filter)
    let myTable = document.getElementById("myTable");
    let tr =myTable.getElementsByTagName("tr")
    console.log(tr)
    for(i=0 ;i<tr.length;i++){
      let td = tr[i].getElementsByTagName("td")[0];
      console.log(td)
      if(td){
         let textValue =td.textContent ||td.innerText
console.log(textValue)
       if(textValue.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display ="";
       }else{
        tr[i].style.display ="none";
       }
        }
    }
}
