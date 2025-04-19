function isBalanced(str) {
  do {
    str=str.replace("[]","");
  }
  while(str.includes("[]"));
  let or=str.includes("[") || str.includes("]");
  return !or;
}
