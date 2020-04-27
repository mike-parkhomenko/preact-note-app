function normilizeObjById(obj) {
  if (!obj.id) {
    throw new Error("Can not normilize object. Wrong data format. No 'id' property found.");
  }
  return { [obj.id]: { ...obj } };
}

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object

export { normilizeObjById };
