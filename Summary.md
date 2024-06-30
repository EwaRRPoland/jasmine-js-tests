# Podsumowanie zadania

## W trakcie wykonywania zadania trzeba było zmierzyć się z zagadnieniami:

## Własciwa struktura kataloogów i plików:

Po pierwsze należało okreslić gdzie i jakie pliki mają sie znajdować w katalogu `jasmine-js-tests`.
Wypracowana struktura poniżej.

```
## jasmine-js-tests/
│
├── assets/
│ └── 1.jpg
│
├── node_modules/
│
├── src/
│ ├── calculate.js
│ └── checkAge.js
│
├── spec/
│ ├── calculate.test.js
│ ├── checkAge.test.js
│ │
│ ├── support/
│   └── jasmine.json
│
├── package-lock.json
└── package.json
```

## Oto opis krok po kroku, jak zainstalować i skonfigurować `Jasmine` w projekcie oraz jak uruchomić testy:

1. Instalacja `Jasmine`:

-Pierwszym krokiem jest zainstalowanie `Jasmine` jako zależności deweloperskiej w projekcie. Wykonałam poniższą komendę w wierszu poleceń / terminalu:

`npm install --save-dev jasmine`

- Ta komenda zainstaluje `Jasmine` lokalnie w katalogu projektu.

2. Inicjalizacja `Jasmine`:

- Następnie użyłam poniższej komendy, aby zainicjować konfigurację `Jasmine` w projekcie:

`npx jasmine init`

- To spowoduje utworzenie pliku `spec/support/jasmine.json`, który zawiera podstawowe ustawienia `Jasmine`.

3. Edycja pliku `package.json`:

- Otwórzyłam plik `package.json` w moim projekcie.

- Dodałam sekcję `"scripts"` i ustawiłam skrypt testowy na `"jasmine"`:

  JSON

```
 "scripts": {
 "test": "jasmine"
}
```

- To pozwoliło mi uruchamiać testy za pomocą komendy `npm test`.

4. Uruchomienie testów:

Gdy jest zainstalowany `Jasmine` i skonfigurowany skrypt testowy, mogłam uruchomić testy za pomocą komendy:

`npm test`

- Jasmine wykona wszystkie testy zdefiniowane w katalogu `spec`.

## wynik testów:

Wynik testów - krok po kroku opis, co oznacza każda część wyniku:

1.  **Randomized with seed 00008**:

    - To oznacza, że testy były uruchamiane w losowej kolejności, a ziarno (seed) użyte do generowania losowości wynosi 00008.

2.  **Started**:

    - Informacja, że testy zostały rozpoczęte.

3.  **…**:

    - Każda kropka oznacza, że jeden spec (test) zakończył się pomyślnie. Jest ich 6, więc wszystkie testy przeszły bez problemów.

4.  **6 specs, 0 failures**:

    - Jest łącznie 6 specyfikacji (testów) i nie ma żadnych błędów (failures).

5.  **Finished in 0.021 secondsFinished in 0.021 seconds**:

    - Cały proces testowania zajął tylko 0,021 sekundy.

6.  **Randomized with seed 00008 (jasmine --random=true --seed=00008)**:

    - To jest ponownie informacja o losowości testów, ale tym razem podana jest komenda, użyta do uruchomienia testów.
