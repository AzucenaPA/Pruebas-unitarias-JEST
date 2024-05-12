const isValidDNA = require("../dna.js");

describe("Testing cases for isValidDNA function", () => {
    test("That DNA sequence is valid", () => {
        expect(isValidDNA("AGCTTC")).toBe(true);
    });

    test("That DNA sequence is NOT valid", () => {
        expect(isValidDNA("AGCTLMG")).toBe(false);
    });

    test("Empty sequence", () => {
        expect(isValidDNA("")).toBe("");
    });

    test("Your input is not string", () => {
        expect(isValidDNA(634)).toBe("")
    });
})