module.exports = function(left, right){
  // if both are NaN
  if(left != left) {
    return right != right
  }
  // differences between -0 and +0
  if(left === 0 && right === 0){
    return 1 / left == 1 / right;
  }
  return left === right
}
