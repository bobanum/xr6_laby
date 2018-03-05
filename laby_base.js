/*jslint browser:true*/
/*global gLaby */
function load() {
	var grille = document.getElementById("grille");
	var i, j, nbRangees, nbCellules, rangee, cellule, x, y;
	var bgPosX = [0,0,1,1,0,0,1,1,3,3,2,2,3,3,2,2];
	var bgPosY = [0,3,0,3,1,2,1,2,0,3,0,3,1,2,1,2];
	var affichage = '';
	affichage += '<table>';
	affichage += '<tbody>';
	nbRangees = gLaby.length;
	for (i = 0; i < nbRangees; i += 1) {
		affichage += '<tr>';
		rangee = gLaby[i];
		nbCellules = rangee.length;
		for (j = 0; j < nbCellules; j += 1) {
			cellule = rangee[j];
			x = 64*bgPosX[cellule];
			y = 64*bgPosY[cellule];
			affichage += '<td style="background-position:-'+x+'px -'+y+'px;">'+cellule+'</td>';
		}
		affichage += '</tr>';
	}
	affichage += '</tbody>';
	affichage += '</table>';
	grille.innerHTML = affichage;
}
window.addEventListener("load", load);
