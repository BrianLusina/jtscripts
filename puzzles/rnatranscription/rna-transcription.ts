type Nucleotide = 'A' | 'C' | 'G' | 'T';

const TRANSLATION_MAP: { [Nucleotide: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

function throwError(message = 'Invalid input DNA.') {
  throw new Error(message);
}

function translateNucleotide(nucleotide: string): string | void {
  return TRANSLATION_MAP[nucleotide as Nucleotide] || throwError();
}

export function toRna(nucleotides: string): string {
  return nucleotides.split('').map(translateNucleotide).join('');
}
