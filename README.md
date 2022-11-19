# pocztator


#### TODO:

BACKEND:
- validacja rozszerzenia plików
- validacja nazwy plików
- zmiana nazwy plików na żądanie

DWA ENDPOINTY:
/validate
Zwracaj JSON:
```
{
    valid: false,
    errors: {
				WT_NOT_PDF: "Podany plik, nie jest plikiem PDF",
        WT_2_5_a: "Nazwa pliku zawiera niedozwolone znaki specjalne!",
        WT_2_5_b: "Spacje wiodące i końcowe w nazwach plików lub folderów nie są dozwolone",
				WT_2_5_c: "kodowanie znaków w UTF-8",
				WT_2_5_d: "długość nazwy pliku wraz z rozszerzeniem max 255",
				WT_2_7_a: "fonty muszą być osadzone w dokumencie",
				WT_2_7_b: "minimalny stopień pisma drukowanego jednym kolorem: dla krojów jednoelementowych 5 pkt, dla krojów dwuelementowych 6 pkt",
				WT_2_7_c: "minimalny stopień pisma drukowanego więcej niż 1 kolorem lub w kontrze: - dla krojów jednoelementowych 8 pkt, - dla krojów dwuelementowych 10 pkt,"
				WT_2_9: "formularze - pliki PDF nie mogą zawierać aktywnych formularzy,"
				WT_2_11: "grafiki - wszystkie zamieszczone grafiki w rozdzielczości minimum 150 DPI, optymalnie 300 DPI w skali 1:1, trybie CMYK / 8 bitów"
    }
}
```
/fix
- zwraca poprawiony plik, jeżeli udało się go poprawić

FRONTEND:
- Formularz uploadowania plików
- Wyświetlanie błędów
