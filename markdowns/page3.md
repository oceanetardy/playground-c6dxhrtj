# Test

pourquoi javascript
?[What is Java Script?]
-[ ] 1
-[ ] 2
-[x] 3
-[ ]  4

# JavaScript - Stocker les informations avec les variables

# Le [support du cours](https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Variables) est associé à la documentation officielle de la fondation Mozilla.  



## Déclaration des variables:   `let` et `var`

`let` permet de déclarer des variables dont la portée est limitée à celle du bloc dans lequel elles sont déclarées. 
Le mot-clé `var`, quant à lui, permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).

Voici un morceau de code avec la déclaration de variables

```javascript 
const etude ="etude";
mondiplome = 'IUT';
var maFormation = 'INFO';
let maSpecialite = 'DEV';

if (etude == "etude") {
mondiplome = 'BTS';
var maFormation = 'SIO';
let maSpecialite = 'SLAM';
    console.log(mondiplome);
    console.log(maFormation);
    console.log(maSpecialite);
}
    console.log(" en dehors du bloc");
    console.log(mondiplome);
    console.log(maFormation);
    console.log(maSpecialite);
```



```javascript runnable
const etude ="etude";
mondiplome = 'IUT';
var maFormation = 'INFO';
let maSpecialite = 'DEV';

if (etude == "etude") {
mondiplome = 'BTS';
var maFormation = 'SIO';
let maSpecialite = 'SLAM';
    console.log(mondiplome);
    console.log(maFormation);
    console.log(maSpecialite);
}
    console.log(" en dehors du bloc");
    console.log(mondiplome);
    console.log(maFormation);
    console.log(maSpecialite);

```

## Typage faible
```javascript
var myNumber = '500'; // oops, c'est toujours une chaîne
console.log(typeof(myNumber));
```
```javascript
myNumber = 500; // mieux — maintenant c'est un nombre
typeof(myNumber);
```
Entrez ces quatre lignes dans la console les unes à la suite des autres, et voyez les résultats. Notez l'emploi de la fonction spéciale `typeof()` — elle renvoie le type de donnée placé dans la variable. À son premier appel, elle renverra `string`, car à ce stade la variable `myNumber` contient la chaîne `'500'`. Observez bien et voyez ce que la fonction renvoie au second appel.

```javascript runnable
// Typage faible
```

## Types de variables

Dans l'exercice ci-dessous vous devez créer les variables suivantes : 
- `num`qui contient le nombre 42 
- `txt` qui contient la chaîne de caractère *42*  
- `bin` qui contient la valeur booléenne *vraie*  
- `flt` qui contient la valeur 42,42  

@[Créez les variables demandées ci-dessus]({"stubs": ["variables01.js"], "command":"node_modules/mocha/bin/mocha test_variables01.js --reporter list" })

## Les conversions sur les variables
Dans cet exercice vous devez créer les variables suivantes : 
- `num` qui contient le nombre 42  
- `txt` qui contient la chaine de caractère *13*
- `temp` qui contient le nombre 0  
- Convertir la chaîne contenue dans `txt` en nombre avec *parseInt()* et mettre le résultat dans `temp` 
- Ajouter à `num` le contenu de `temp` 

@[Créez les variables et réalisez les opérations demandées]({ "stubs": ["variables02.js"], "command": "node_modules/mocha/bin/mocha test_variables02.js --reporter list" })

## Opérations sur les variables

...
C'est à vous de proposer la suite ...

## Utilisation de méthode 

Vous devez écrire la ligne pour renvoyer le contenu de la variable `str` en utilisant la méthode `toUpperCase()`

@[Test unittest: uppercase]({"stubs":["uppercase.js"], "command":"node_modules/mocha/bin/mocha test.js --reporter list"})

