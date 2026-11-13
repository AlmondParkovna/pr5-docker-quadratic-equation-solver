
const a = Number(process.env.A);
const b = Number(process.env.B);
const c = Number(process.env.C);

console.log("============================================");
console.log("       РОЗВ'ЯЗУВАЧ КВАДРАТНИХ РІВНЯНЬ");
console.log("============================================");

if (
    process.env.A === undefined ||
    process.env.B === undefined ||
    process.env.C === undefined ||
    ![a, b, c].every(Number.isFinite)
) {
    console.log("Помилка: задайте коректні змінні A, B та C.");
    process.exit(1);
}

console.log(`\nРівняння: ${a}x² + (${b})x + (${c}) = 0`);

if (a === 0) {
    console.log("\nПомилка: коефіцієнт A не може дорівнювати нулю.");
    process.exit(1);
}

console.log("\nКрок 1. Обчислюємо дискримінант:");
console.log("D = b² - 4ac");

const D = b ** 2 - 4 * a * c;

console.log(`D = ${b}² - 4 * ${a} * ${c}`);
console.log(`D = ${D}`);

console.log("\nКрок 2. Знаходимо корені:");

if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);

    console.log("D > 0, рівняння має два різних корені.");
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
} else if (D === 0) {
    const x = -b / (2 * a);

    console.log("D = 0, рівняння має один подвійний корінь.");
    console.log(`x = ${x}`);
} else {
    console.log("D < 0, рівняння не має дійсних коренів.");
}

console.log("\nРозв'язання завершено.");
console.log("============================================");
