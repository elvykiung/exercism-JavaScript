//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = rna => {
  const translate = [];
  const protein = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP"
  };

  if (!rna) {
    return [];
  }

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);

    if (codon !== "UAA" && codon !== "UAG" && codon !== "UGA") {
      translate.push(protein[codon]);
    } else {
      break;
    }

    if (protein[codon] == null) {
      throw "Invalid codon";
    }
  }

  return translate;
};
