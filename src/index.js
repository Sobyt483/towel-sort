module.exports = function towelSort (matrix) {
  let result = []
if (arguments.length === 0){
  result = []
}else {
  matrix.forEach((x, i) => {
    if (i%2 === 1){
      x.sort((a, b) => b - a)
      x.forEach(f => {
        result.push(f)
      })
    }else {
      x.forEach(g => {
        result.push(g)
    })
  }
  });
}
return result
}
