
print("Taille total vs taille occupable pour de bonne performances : ")

for puissance_de_deux in range(22+1):
	taille_totale = 2**puissance_de_deux
	#print("2**"+str(puissance_de_deux)+" = "+str(taille_totale))

	taille_max_a_occuper = taille_totale - (taille_totale * (1/4))
	#print("taille_max_a_occuper = "+str(taille_max_a_occuper))

	#print("Pour une taille totale de "+str(taille_totale)+" Mo, la taille maximal à occuper est de "+str(taille_max_a_occuper)+" Mo.")

	print(str(taille_totale)+" Mo vs "+str(taille_max_a_occuper)+" Mo")
	