export const capitalizeFirst = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const capitalizeAllFirst = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string
    .split(" ")
    .map(str => capitalizeFirst(str))
    .join(" ");
};

export const inteligentCapitalize = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string
    .split(" ")
    .map(str => {
      if (str.length < 2) return str;

      return capitalizeFirst(str);
    })
    .join(" ");
};

export const camelToSentenceFirstUpper = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return capitalizeFirst(
    string
      .split(" ")
      .map(str => str.replace(/([A-Z])/g, " $1"))
      .join(" "),
  );
};

export const camelToSentenceAllFirstUpper = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string
    .split(" ")
    .map(str => {
      const sentence = str.replace(/([A-Z])/g, " $1");

      return capitalizeFirst(sentence);
    })
    .join(" ");
};

export const sentenceToCamel = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (/\s+/.test(match)) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

export const camelToSnake = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string.replace(/[A-Z]/g, str => `_${str.toLowerCase()}`);
};

export const camelToKebab = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string.replace(/[A-Z]/g, str => `-${str.toLowerCase()}`);
};

export const revomeNonNumeric = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string.replace(/\D/g, "");
};

export const removeAccents = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string.normalize("NFD").replace(/([\u0300-\u036f])/g, "");
};

export const removeAccentsAndSpecialCharactersIncludingSpaces = (
  string: string,
) => {
  if (!string || typeof string !== "string") return string;

  return string.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
};

export const upperCase = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string.toUpperCase();
};

export const lowerCase = (string: string) => {
  if (!string || typeof string !== "string") return string;

  return string.toLowerCase();
};
