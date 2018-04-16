let obj = {
  type: "type",
  value: 1,
  array: [1,2,3]
}

let { type, ...post } = obj;

console.log(post);
