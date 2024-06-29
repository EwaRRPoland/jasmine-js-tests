# goit-js-hw-02

## Zadanie 1

Napisz funkcję ``calculateRectangleArea``, która będzie obliczała pole prostokąta na podstawie długości i szerokości, przekazanych jako argumenty funkcji. Następnie przetestuj tę funkcję, używając testów jednostkowych w Jasmine lub innym narzędziu do testowania JavaScript.

```// calculate.js
function calculateRectangleArea(length, width) {
  return length * width;
}

module.exports = calculateRectangleArea;

// calculate.test.js
const calculateRectangleArea = require('./calculate');

test('Oblicza pole prostokąta o długości 5 i szerokości 4', () => {
  expect(calculateRectangleArea(5, 4)).toBe(20);
});

test('Oblicza pole prostokąta o długości 3 i szerokości 7', () => {
  expect(calculateRectangleArea(3, 7)).toBe(21);
});

test('Oblicza pole prostokąta o długości 10 i szerokości 10', () => {
  expect(calculateRectangleArea(10, 10)).toBe(100);
});

```
## Zadanie 2

Napisz funkcję ``isAdult``, która będzie sprawdzała, czy osoba jest pełnoletnia, na podstawie przekazanego wieku. Funkcja powinna zwracać wartość logiczną (``true`` lub ``false``). Następnie przetestuj tę funkcję dla różnych przypadków.

```// checkAge.js
function isAdult(age) {
  return age >= 18;
}

module.exports = isAdult;

// checkAge.test.js
const isAdult = require('./checkAge');

test('Sprawdza czy osoba o wieku 20 lat jest pełnoletnia', () => {
  expect(isAdult(20)).toBe(true);
});

test('Sprawdza czy osoba o wieku 16 lat jest pełnoletnia', () => {
  expect(isAdult(16)).toBe(false);
});

test('Sprawdza czy osoba o wieku 18 lat jest pełnoletnia', () => {
  expect(isAdult(18)).toBe(true);
});

```

Po napisaniu funkcji i odpowiednich testów, uruchom je, aby sprawdzić poprawność działania. Upewnij się, że testy przechodzą, a funkcje zachowują się zgodnie z oczekiwaniami.

# Instrukcja 

Oto kroki do wykonania zadania domowego:

## Kroki do wykonania zadania z operacjami matematycznymi:

Stwórz nowy plik JavaScript o nazwie ``calculate.js``.
W pliku ``calculate.js``, zdefiniuj funkcję ``calculateRectangleArea``, która będzie przyjmować długość i szerokość prostokąta jako argumenty i zwracać ich pole.

```// calculate.js
function calculateRectangleArea(length, width) {
  return length * width;
}

module.exports = calculateRectangleArea;

```
Stwórz nowy plik testowy JavaScript o nazwie ``calculate.test.js``.
W pliku ``calculate.test.js``, użyj funkcji test z biblioteki testowej (np. ``Jest``), aby napisać testy dla funkcji ``calculateRectangleArea``.

```// calculate.test.js
const calculateRectangleArea = require('./calculate');

test('Oblicza pole prostokąta o długości 5 i szerokości 4', () => {
  expect(calculateRectangleArea(5, 4)).toBe(20);
});

test('Oblicza pole prostokąta o długości 3 i szerokości 7', () => {
  expect(calculateRectangleArea(3, 7)).toBe(21);
});

test('Oblicza pole prostokąta o długości 10 i szerokości 10', () => {
  expect(calculateRectangleArea(10, 10)).toBe(100);
});

```

Uruchom testy, aby sprawdzić, czy funkcja ``calculateRectangleArea`` działa poprawnie.

## Kroki do wykonania zadania z operatorem porównania:

Stwórz nowy plik JavaScript o nazwie ``checkAge.js``.
W pliku ``checkAge.js``, zdefiniuj funkcję ``isAdult``, która będzie sprawdzała, czy osoba jest pełnoletnia na podstawie wieku.

```// checkAge.js
function isAdult(age) {
  return age >= 18;
}

module.exports = isAdult;

```

Stwórz nowy plik testowy JavaScript o nazwie ``checkAge.test.js``.
W pliku ``checkAge.test.js``, użyj funkcji test z biblioteki testowej (np. ``Jest``), aby napisać testy dla funkcji ``isAdult``.

```// checkAge.test.js
const isAdult = require('./checkAge');

test('Sprawdza czy osoba o wieku 20 lat jest pełnoletnia', () => {
  expect(isAdult(20)).toBe(true);
});

test('Sprawdza czy osoba o wieku 16 lat jest pełnoletnia', () => {
  expect(isAdult(16)).toBe(false);
});

test('Sprawdza czy osoba o wieku 18 lat jest pełnoletnia', () => {
  expect(isAdult(18)).toBe(true);
});

```
Uruchom testy, aby sprawdzić, czy funkcja ``isAdult`` działa poprawnie.
Po wykonaniu powyższych kroków, sprawdź czy testy przechodzą, a funkcje zachowują się zgodnie z oczekiwaniami.
