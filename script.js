function fact(){
    let data = document.getElementById('data').value;//recupere la valeur du input et on place cette valeur dans une variabe que l,on nomme data
    let i = 0,fact = 1; //on declare et initialisela variable i a 0 et f a 1
    while (i < data){//on met une boucle avec une condition stricte tant que i et inferieur a data
        i++; //on incremente de 1 jusqu'a ce que i soit egale ou superieur a data et on qui la boucle
        fact *= i;//ou f = f * i // dans f on affecte une nouvellle valeur comme f vaut 1 au depart on multiple f * i
    }
document.getElementById('rep').innerText= fact;//on inject la valeur de f dans la page html
}