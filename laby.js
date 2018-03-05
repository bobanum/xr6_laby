/*jslint browser:true*/
/*global gLaby */
function backgroundPosition(cellule) {
	var x, y, bgPosX, bgPosY, resultat;
	bgPosX = [0,0,1,1,0,0,1,1,3,3,2,2,3,3,2,2];
	bgPosY = [0,3,0,3,1,2,1,2,0,3,0,3,1,2,1,2];
	x = 64*bgPosX[cellule];
	y = 64*bgPosY[cellule];
	resultat = 'background-position:-'+x+'px -'+y+'px;';
	return resultat;
}
function htmlTd(cellule) {
	var resultat;
	resultat = '<td style="'+backgroundPosition(cellule)+'">'+cellule+'</td>';
	return resultat;
}

function htmlRangee(rangee) {
	var resultat, j, cellule, nbCellules;
	resultat = '';
	resultat += '<tr>';
	nbCellules = rangee.length;
	for (j = 0; j < nbCellules; j += 1) {
		cellule = rangee[j];
		resultat += htmlTd(cellule);
	}
	resultat += '</tr>';
	return resultat;
}

function htmlGrille(laby) {
	var resultat, nbRangees, i, rangee;
	resultat = '';
	resultat += '<table>';
	resultat += '<tbody>';
	nbRangees = laby.length;
	for (i = 0; i < nbRangees; i += 1) {
		rangee = laby[i];
		resultat += htmlRangee(rangee);
	}
	resultat += '</tbody>';
	resultat += '</table>';
	return resultat;
}

function load() {
	var grille, affichage;
	grille = document.getElementById("grille");
	affichage = '';
	affichage += htmlGrille(gLaby);
	grille.innerHTML = affichage;
}
window.addEventListener("load", load);
