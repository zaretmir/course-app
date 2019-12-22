export function sortItems(items: any[], field: string, order: string) {
  if (order === 'desc') {
    return items.sort((a: any, b: any) => descending(a, b, field));
  } else {
    return items.sort((a: any, b: any) => ascending(a, b, field));
  }
}

function ascending(a: any, b: any, field: string) {
  return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
}

function descending(a: any, b: any, field: string) {
  return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
}
