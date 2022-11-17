export const randomRGBColor = () => {
    const r = Math.trunc(Math.random() * 255)
    const g = Math.trunc(Math.random() * 255)
    const b = Math.trunc(Math.random() * 255)
    return `${r},${g},${b}`
};

export const generateRandomNumber = () => Math.trunc(Math.random() * 1000) + 1;

export const compareItems = (a, b) => a.num - b.num;

export const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : null;
}
