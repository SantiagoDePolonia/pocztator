# Pocztator - weryfikator dokumentów

![Pocztator](./frontend/src/logo.gif)

Pocztator to prosta aplikacja ułatwiająca pracę urzędnikom w Ministerstwie Finansów oraz KIS. Pozwala na sprawdzenie poprawności plików PDF, przed wysłaniem ich do Poczty Polskiej.

Aplikacja została stworzona podczas hackathonu HackYeah 2022.

---
## Niektóre błędy zwracane przez pocztator

- WT_NOT_PDF: "Podany plik, nie jest plikiem PDF",
- WT_2_1: "Plik powinien być w orientacji pionowej",
- WT_2_5_a: "Nazwa pliku zawiera niedozwolone znaki specjalne, takie jak:~\"#%&*:<>?!/\\{|}",
- WT_2_5_b: "Spacje wiodące i końcowe w nazwach plików lub folderów nie są dozwolone",
- WT_2_5_c: "Kodowanie znaków w UTF-8",
- WT_2_5_d: "Długość nazwy pliku wraz z rozszerzeniem max 255",
- WT_2_7_a: "Fonty muszą być osadzone w dokumencie",
- WT_2_7_b: "minimalny stopień pisma drukowanego jednym kolorem: dla krojów jednoelementowych 5 pkt, dla krojów dwuelementowych 6 pkt",
- WT_2_7_c: "minimalny stopień pisma drukowanego więcej niż 1 kolorem lub w kontrze: - dla krojów jednoelementowych 8 pkt, - dla krojów dwuelementowych 10 pkt,"
- WT_2_9: "formularze - pliki PDF nie mogą zawierać aktywnych formularzy,"
- WT_2_11: "grafiki - wszystkie zamieszczone grafiki w rozdzielczości minimum 150 DPI, optymalnie 300 DPI w skali 1:1, trybie CMYK / 8 bitów"

Kody błędów są zgodne z numerami punktów opisanymi w dokumencie opublikowanym na stronie ministerstwa: https://mc.bip.gov.pl/fobjects/download/999150/do-publikacji-minimalne_wymagania_techniczne_v-1-0-pdf.html


## Jak uruchomić?

Aplikacja jest prosta w użyciu. Należy wgrać pliki z katalogu `./frontend/build` na serwer http. Należy również odpalić backend. Można do tego użyć dockera i pliku `docker-composer.yml`.
