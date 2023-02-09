function affiche_taille() {
	let liste_resultats = document.querySelector("#affichage_resultats");
	for (
		let puissance_de_deux = 0;
		puissance_de_deux < 22 + 1;
		puissance_de_deux++
	) {
		let taille_totale = Math.pow(2, puissance_de_deux);
		let taille_max_a_occuper = taille_totale - taille_totale * (1 / 4);

		let li = document.createElement("li");
		li.innerText = taille_totale + " Mo vs " + taille_max_a_occuper + " Mo";
		liste_resultats.appendChild(li);
	}
}

document
	.querySelector("#form_taille_totale")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		let taille_totale = Number(
			document.querySelector("#taille_totale").value
		);
		if (!isNaN(taille_totale)) {
			let taille_max_a_occuper = taille_totale - taille_totale * (1 / 4);
			document.querySelector("#resultat_calcul").innerText =
				"Résultat : " +
				taille_totale +
				" Mo vs " +
				taille_max_a_occuper +
				" Mo.";
		}
	});

affiche_taille();
