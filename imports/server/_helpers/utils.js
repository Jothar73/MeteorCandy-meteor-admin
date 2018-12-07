const utils = {};

utils.objectToRow = function(obj, keys) {
  if (!obj) {
    return '<tr></tr>';
  }
  if(!keys){
   keys = Object.getOwnPropertyNames(obj);
  }
  return `<tr>${keys.reduce((final, current) => {
    return `${final}<td>${obj[current]}</td>`;
  }, '')}</tr>`;
};
utils.collectionToTable = function(collection) {
  if (!collection) {
    return 'No data found';
  }
  let total = `<h3>${collection.length} items</h3>`;
  const keys = Object.getOwnPropertyNames(collection);
  const headerRow = `<tr>${keys.reduce((final, current) => {
    return `${final}<td>${current}</td>`;
  }, '')}</tr>`;
  const body = collection.reduce((final,current)=>{
    return final + utils.objectToRow(current, keys);
  },'');
  return `${total}<table>${headerRow}${body}</table>`;
};

export { utils };
