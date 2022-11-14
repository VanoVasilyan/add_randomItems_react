export const randomRGBColor = () => {
    const r = Math.trunc(Math.random() * 255)
    const g = Math.trunc(Math.random() * 255)
    const b = Math.trunc(Math.random() * 255)
    return `${r},${g},${b}`
};

export const generateRandomNumber = () => Math.trunc(Math.random() * 1000) + 1;

export const compareItems = (a, b) => a.num - b.num;
