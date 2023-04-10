

$(document).on("click", "#side-trigger", (e)=>{

if (e.target.dataset.hide == 0) {
	document.getElementById("top-bar").style.display = "block";
	document.getElementById("side-trigger").setAttribute("data-hide", 1);
}else if (e.target.dataset.hide == 1) {
	document.getElementById("top-bar").style.display = "none";
	document.getElementById("side-trigger").setAttribute("data-hide", 0);
}

});


$(document).on("click", "#opensidebar", (e)=>{
console.log("click");
document.getElementById('sidebar').setAttribute("class", "active");
document.getElementById('main-body').setAttribute("style", "overflow-y: hidden;");

});


$(document).on("click", "#close-sidebar", (e)=>{

document.getElementById('sidebar').setAttribute("class", "");
document.getElementById('main-body').setAttribute("style", "overflow-y: auto;");

});