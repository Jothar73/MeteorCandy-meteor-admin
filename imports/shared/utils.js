const utils = {};

utils.objectToRow = function(obj, keys) {
  if (!obj) {
    return '<tr></tr>';
  }
  if(!keys){
   keys = Object.getOwnPropertyNames(obj);
  }
  return `<tr style='border-bottom:1px solid #eee;'>${keys.reduce((final, current) => {
    return `${final}<td>${obj[current]}</td>`;
  }, '')}</tr>`;
};
utils.collectionToTable = function(collection) {
  if (!collection) {
    return 'No data found';
  }
  let total = `<h3>${collection.length} items</h3>`;
  const keys = Object.getOwnPropertyNames(collection[0]);
  const headerRow = `<tr style='border:1px solid #ccc;'>${keys.reduce((final, current) => {
    return `${final}<td>${current}</td>`;
  }, '')}</tr>`;
  const body = collection.reduce((final,current)=>{
    return final + utils.objectToRow(current, keys);
  },'');
  return `${total}<table style='width:100%;'>${headerRow}${body}</table>`;
};

export { utils };
