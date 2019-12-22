export function paginate(items: any[], pageSize: number, pageNumber: number): any[] {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
}
