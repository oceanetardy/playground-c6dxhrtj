# Test

pourquoi javascript
?[What is Java Script?]
-[ ] 1
-[ ] 2
-[x] 3
-[ ]  4


Voici un morceau de code avec la déclaration de variables

```javascript 
const etude ="etude";
mareponse = 'REPONSE';
var F = 'NON';
let V = 'OUI';

if (etude == "etude") {
mareponse = 'REPONSE2';
var F = 'NON2';
let V = 'OUI2';
    console.log(mareponse);
    console.log(F);
    console.log(V);
}
    console.log(" en dehors du bloc");
    console.log(mareponse);
    console.log(F);
    console.log(V);
```



```javascript runnable
const etude ="etude";
mareponse = 'REPONSE';
var F = 'NON';
let V = 'OUI';

if (etude == "etude") {
mareponse = 'REPONSE2';
var F = 'NON';
let V = 'OUI';
    console.log(mareponse);
    console.log(F);
    console.log(V);
}
    console.log(" en dehors du bloc");
    console.log(mareponse);
    console.log(F);
    console.log(V);

```





# Introduction

Unit Testing is a one of the best practice that should be performed starting from the first stages and throughout the whole process of development. Unit tests are written to detect bugs early in the development of the application when bugs are less frequent and less expensive to fix.

In this playground I’ll cover the basics of how to create and run a simple test using unittest.

The source code is on [GitHub](https://github.com/abdesslem/playground-Nru8VX7O), please feel free to come up with proposals to improve it.

# Creating a simple test:

Supposing that we have a very simple add function which return the sum of two integer.

To create a unit test, we have to:

- Create a class derived from unittest.TestCase # Introduction



Unit Testing is a one of the best practice that should be performed starting from the first stages and throughout the whole process of development. Unit tests are written to detect bugs early in the development of the application when bugs are less frequent and less expensive to fix.



In this playground I’ll cover the basics of how to create and run a simple test using unittest.



The source code is on [GitHub](https://github.com/abdesslem/playground-Nru8VX7O), please feel free to come up with proposals to improve it.



# Creating a simple test:



Supposing that we have a very simple add function which return the sum of two integer.



To create a unit test, we have to:
- Create a function that start with "test"

@[What's the result of 3 + 4 !!]({"stubs": ["sample.py"], "command": "python3 sample.py"})

In the second example we will check if the result of 3 + 4 equals 8

@[What's the result of 3 + 4 !!]({"stubs": ["sample2.py"], "command": "python3 sample2.py"})

In these two example we used assertEqual() function to check for an expected result.

unittest provide others functions such as:

- assertTrue() or assertFalse() to verify a condition
- assertRaises() to verify that a specific exception gets raised.
- setUp() and tearDown() methods to define instructions that will be executed before and after each test method


# Using assertRaises

@[Raise Exception when the separator is not a string]({"stubs": ["test_except.py"], "command": "python3 test_except.py"})


# Using assertTrue and assertIn

@['1' exist in the list but FOo is not uppercase]({"stubs": ["test_true.py"], "command": "python3 test_true.py"})

# setUp()

When a setUp() method is defined, the test runner will run that method prior to each test.

@[setUp() executed before each test !]({"stubs": ["test_setup.py"], "command": "python3 test_setup.py"})


# Test discovery

Test discovery is used when you have many test files in that case It would be annoying to have to run each test file separately.

Supposing that you have all your test files in a "tests" directory. To run all of the unittests, use python -m unittest discover tests

