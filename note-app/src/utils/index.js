function normilizeObjById(obj) {
  if (!obj.id) {
    throw new Error(
      "Can not normilize object. Wrong data format. No 'id' property found."
    );
  }
  return { [obj.id]: { ...obj } };
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export { normilizeObjById, isObjectEmpty };
