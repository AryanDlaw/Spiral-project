function collapse(n){
  let head = document.getElementById("tnt"+n);
  if(head.style.display === "block"){
    head.style.display = "none";
  }else{
    head.style.display = "block";
  }  
}
//document.getElementById("defaultOpen").click();
function tab(evt, tabname) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("list-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" list-item-active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " list-item-active";
}