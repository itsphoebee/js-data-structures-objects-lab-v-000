// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = {...obj};
  newObj[key] = value;
  return newObj;
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}
function deleteFromDriverByKey(driver, key){
  delete driver.key;
}