type arg = {
  [x: string]: string;
}[];
export default (p: arg, c: arg) => p.map((p1, i) => ({ ...p1, ...c[i] }));
