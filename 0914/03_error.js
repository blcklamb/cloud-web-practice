let x = Math.round(Math.random());
try {
  if (!x) throw "empty";
  let y = x + 3;
  console.log(`this is y: ${y}`);
} catch (error) {
  console.error(`x is ${error}`);
} finally {
  console.log("process end");
}
