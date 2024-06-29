# Podsumowanie zadania

## W trakcie wykonywania zadania trzeba było zmierzyć się z zagadnieniami:

1. Własciwa struktura kataloogów i plików:

Po pierwsze należało okreslić gdzie i jakie pliki mają sie znajdować.
Wypracowana struktura poniżej.

## goit-js-hw-02/

├── src/
│ ├── calculate.js
│ ├── checkAge.js
│ │
│ ├── support/
│ └── jasmine.json
│
└── spec/
├── calculate.test.js
└── checkAge.test.js

2. Instalacja Jasmine globalnie na komputerze w `VScode`:

Aby zainstalować Jasmine globalnie w terminalu `Node.js` wpisujemy komendę:

`npm install -g jasmine`

Tworzymy projekt, w moim przypadku `myProject` i z poziomu tego katalogu będziemy inicjalizować `Jasmine` w projekcie.

Ale wcześniej trzeba:

3. Zmiana polityki wykonywania w `Microsoft PowerShell` z poziomu administratora komendą `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`

4. uruchomienie testów w terminalu w `VScode`
