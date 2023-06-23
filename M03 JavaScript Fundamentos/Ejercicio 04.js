/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   var elevatedNum = math.pow(2,2);
   return elevatedNum;
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   var elevatedNum = math.pow(2,3);
   return elevatedNum;
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   num = 2;
   exponent = "x";
   var elevatedNum = math.pow(num,exponent);
   return elevatedNum;
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   var num = math.round(0.145);
   return num;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   var num = math.ceil(3.1);
   return num;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   var num;
   math.random(num);
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
