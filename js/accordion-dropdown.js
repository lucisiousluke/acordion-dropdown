let button = document.getElementsByTagName("button");

for(i=0;i<button.length;i++)
	button[i].onclick=doSomething;

function doSomething(e) {
  if (e.target.classList.contains("toggle")){
    e.target.classList.toggle("mystyle");
    console.log(e.target.classList);
  } else {
    console.log("this has no toggle ability")
  }    
}