const polypeptides = {
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

export const translate = (rna = "") => {
  return (rna.match(/.{3}/g) || [])
    .reduce((arr, codon) => {
      if (!polypeptides[codon]) throw new Error("Invalid codon");
      return arr.includes("STOP") ? arr : [...arr, polypeptides[codon]];
    }, [])
    .filter(polypeptide => polypeptide !== "STOP");
};
