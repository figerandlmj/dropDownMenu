// onmouseover="showMenu(this)"
function showMenu(obj){
	var menu=obj.getElementsByTagName("dl")[0];
	menu.style.display="block";
}
// onmouseout="hideMenu(this)"
function hideMenu(obj){
	var menu=obj.getElementsByTagName("dl")[0];
	menu.style.display="none";
}