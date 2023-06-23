// 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
export const OnlyNumbersKeydownRegex = /[^0-9]*/gi

// qualquer carácter de texto ou número
export const LetterKeydownRegex = /[^\w]*[\d]*/

// qualquer carácter de texto ou número (com acentos)
export const CommonTextKeydownRegex = /[^\w\dA\-ZÀ-ú ]*/gi

// texto, número, acentos e - . /
export const SpecialTextKeydownRegex = /[^\w\dA-ZÀ-ú -./]*/gi

// remove ( ) - + . _ e espaços
export const DefaultReplaceRegex = /[()\-+ ._]*/gi

// filtra a quantidade máxima de linhas em branco consecutivas em 4
export const MaxLinesConsecutiveRegex = /\n{4}/gm

// letras (sem e com acentos) e números
export const OnlyTextRegex = /[0-9]*[^A-zÀ-ú ]+$/g

// máscara especial para campos de porcentagem que aceitam valores decimais
export const SpecialNumberKeydownRegex = /[^0-9,.%]*/
