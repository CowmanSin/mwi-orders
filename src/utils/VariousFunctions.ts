export function commNumber(num: number): string {
  const decimal = (num.toString().match(/^(?<=\d)\.\d+$/g) || []).join("");
  num = Math.floor(num);
  const ret = num
    .toString()
    .split("")
    .reverse()
    .map((char, index) => (index % 3 === 0 && index !== 0 ? char + "," : char))
    .reverse()
    .join("")
    .concat(decimal.length > 0 ? "." + decimal : "");
  return ret;
}

export function roundNumber(num: number, places = 0): number {
  if (Math.abs(num) < Math.pow(10, places * -1)) return 0;
  if (places === 0) {
    if (num % 1 >= 0.5) return Math.ceil(num);
    return Math.floor(num);
  }
  let sign = 1;
  if (num < 0) {
    sign = -1;
    num *= -1;
  }
  const point = num.toString().indexOf(".");
  if (point > 0 && places > 0) {
    let temp = num.toString().split("");
    temp.splice(point, 1);
    temp = temp.slice(0, point + places + 1);
    if (Number(temp[temp.length - 1]) > 5)
      temp = (Number(temp.slice(0, temp.length - 1).join("")) + 1)
        .toString()
        .split("");
    else temp.pop();
    temp.splice(point, 0, ".");
    return Number(temp.join("")) * sign;
  } else if (point > 0) {
    let temp = num.toString().split("");
    temp.splice(point, 1);
    temp = temp.slice(0, point + places);
    if (Number(temp[temp.length - 1]) > 5)
      temp = (Number(temp.slice(0, temp.length - 1).join("")) + 1)
        .toString()
        .split("");
    else temp.pop();
    return (
      Number(temp.concat(new Array(places * -1).fill("0")).join("")) * sign
    );
  } else if (places < 0) {
    let temp = num.toString().split("");
    temp = temp.slice(0, temp.length + places + 1);
    if (Number(temp[temp.length - 1]) > 5)
      temp = (Number(temp.slice(0, temp.length - 1).join("")) + 1)
        .toString()
        .split("");
    else temp.pop();
    return (
      Number(temp.concat(new Array(places * -1).fill("0")).join("")) * sign
    );
  } else {
    const temp = num.toString().split("");
    return (
      Number(temp.concat([...["."], ...new Array(places).fill("0")]).join("")) *
      sign
    );
  }
}

export function roundUpToNumber(num: number, roundTo = 1): number {
  if (roundTo % 1 !== 0) return NaN;
  if (num % roundTo === 0) return num;
  return Math.ceil(num / roundTo) * roundTo;
}

export function secondsToReadable(seconds: number): string {
  let time = "";
  if (seconds > 31557600) {
    time += `${Math.floor(seconds / 31557600)}y `;
    seconds -= Math.floor(seconds / 31557600) * 31557600;
  }
  if (seconds > 86400) {
    time += `${Math.floor(seconds / 86400)}d `;
    seconds -= Math.floor(seconds / 86400) * 86400;
  }
  if (seconds > 3600) {
    time += `${Math.floor(seconds / 3600)}h `;
    seconds -= Math.floor(seconds / 3600) * 3600;
  }
  if (seconds > 60) {
    time += `${Math.floor(seconds / 60)}m `;
    seconds -= Math.floor(seconds / 60) * 60;
  }
  if (seconds !== 0) time += `${seconds}s`;
  return time.trimEnd();
}

export function capitaliseEachWordAndAddSpaces(str: string): string {
  return str[0]
    .toUpperCase()
    .concat(str.slice(1))
    .split("")
    .reduce((word, letter) => {
      if (letter === " ") return word + letter;
      if (word.endsWith(" ")) return word + letter.toUpperCase();
      if (letter === letter.toUpperCase()) return word + " " + letter;
      return word + letter;
    });
}
