/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */
var arrayValores=["4","I3","[",")","3","|=","&","#","1",",_|",">|","1",' /\/\ ',"^/","0","|*","(_,)","I2","5","7","(_)","\/","\/\/","><","j","2"];
var letras=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var frase="leet";
frase=frase.toUpperCase(frase);
var fraseFinal="";
var posicion;
for (let i = 0; i < frase.length; i++) {
    for (let index = 0; index < letras.length; index++) {
        if(frase[i]===letras[index]){
            posicion=index;
            index=letras.length;
        }
                
    }
    fraseFinal+=arrayValores[posicion];
    
}
console.log(fraseFinal);