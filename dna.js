function isValidDNA(dna) {
    if (typeof (dna) !== "string" || dna.length === 0) {
        return "";
    };

    let basesNitrog = /^[CTAG]+$/;

    if (basesNitrog.test(dna)) {
        return true;
    } else {
        return false;
    }
};

module.exports = isValidDNA;

//isValidDNA("CCCCTA");
isValidDNA("x");