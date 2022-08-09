export default function tankvol(h: number, d: number, vt: number): number {
  const radius = d / 2;
  const cylinderHeight = vt / (Math.PI * Math.pow(radius, 2));
  const triangleHeight = radius - h;
  const theta = Math.acos(triangleHeight / radius);

  const base = radius * Math.sin(theta);

  const triangleArea = (base * triangleHeight) / 2;
  const sectorArea = (radius * radius * theta) / 2;

  const remainderArea = (sectorArea - triangleArea) * 2;
  return Math.floor(cylinderHeight * remainderArea);
}
