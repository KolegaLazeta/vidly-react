import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //converting to loadash object and chaining methods, then with value convert to regular array
  return _(items).slice(startIndex).take(pageSize).value();
}
