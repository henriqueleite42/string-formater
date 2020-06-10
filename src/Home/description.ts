import * as StringFormatters from "Utils/string";

export { StringFormatters };

export interface Description {
  name: string;
  function: keyof typeof StringFormatters;
  description: string;
  input: string;
  output: string;
}

export const descriptions: Array<Description> = [
  {
    name: "Capitalize First",
    function: "capitalizeFirst",
    description: "Capitalize First Char of String",
    input: "this is an exemple text",
    output: "This is an exemple text",
  },
  {
    name: "Capitalize All First Chars",
    function: "capitalizeAllFirst",
    description: "Capitalize First Char of Each Word",
    input: "this is an exemple text",
    output: "This Is An Exemple Text",
  },
  {
    name: "Inteligent Capitalize",
    function: "inteligentCapitalize",
    description: "Capitalize First Char of Each Word with at least 2 chars",
    input: "this is an exemple text",
    output: "This is an Exemple Text",
  },
  {
    name: "Camel To Sentence (First Upper)",
    function: "camelToSentenceFirstUpper",
    description: "Convert Camel Case to Sentence Case",
    input: "thisIsAnExempleText",
    output: "This is an exemple text",
  },
  {
    name: "Camel To Sentence (All First Upper)",
    function: "camelToSentenceAllFirstUpper",
    description: "Convert Camel Case to Sentence Case",
    input: "thisIsAnExempleText",
    output: "This Is An Exemple Text",
  },
  {
    name: "Sentence To Camel",
    function: "sentenceToCamel",
    description: "Convert Sentence Case to Camel Case",
    input: "This is an exemple text",
    output: "thisIsAnExempleText",
  },
  {
    name: "Camel To Snake",
    function: "camelToSnake",
    description: "Convert Camel Case to Snake Case",
    input: "thisIsAnExempleText",
    output: "this_is_an_exemple_text",
  },
  {
    name: "Camel To Kebab",
    function: "camelToKebab",
    description: "Convert Camel Case to Kebab Case",
    input: "thisIsAnExempleText",
    output: "this-is-an-exemple-text",
  },
  {
    name: "Upper",
    function: "upperCase",
    description: "Convert string to Upper Case",
    input: "This is an exemple text",
    output: "THIS IS AN EXEMPLE TEXT",
  },
  {
    name: "Lower",
    function: "lowerCase",
    description: "Convert string to Lower Case",
    input: "This is an exemple text",
    output: "this is an exemple text",
  },
  {
    name: "Revome Non Numeric",
    function: "revomeNonNumeric",
    description: "String All Non Numeric Characters",
    input: "123 This is an exemple text 456",
    output: "123456",
  },
  {
    name: "Revome Accents And Special Characters",
    function: "removeAccents",
    description: "Revome Accents And Special Characters, Including Spaces",
    input: "É sexta-feira, parabéns para você, meu querido irmão caçula",
    output: "E sexta-feira, parabens para voce, meu querido irmao cacula",
  },
  {
    name: "Revome Accents And Special Characters (Including Spaces)",
    function: "removeAccentsAndSpecialCharactersIncludingSpaces",
    description: "Revome Accents And Special Characters, Including Spaces",
    input: "É sexta-feira, parabéns para você, meu querido irmão caçula",
    output: "Esextafeiraparabensparavocemeuqueridoirmaocacula",
  },
];
