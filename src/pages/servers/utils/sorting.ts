import { Server } from '../services/getServers';

export const ascendingLexical = (a: Server, b: Server) => {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();

  return nameA.localeCompare(nameB);
};
export const descendingLexical = (a: Server, b: Server) =>
  ascendingLexical(a, b) * -1;

export const ascendingNumeric = (a: Server, b: Server) =>
  a.distance - b.distance;
export const descendingNumeric = (a: Server, b: Server) =>
  ascendingNumeric(a, b) * -1;

type ComparerFunc = (a: Server, b: Server) => number;

export const sortBy = (comparer: ComparerFunc) => (list: Server[]) => {
  return list.sort(comparer);
};
