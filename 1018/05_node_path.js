const path = require("path");
const filename = __filename;

console.log(filename);
console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
// dirname_()의 인자로 들어간 경로의 파일 바로 상단 경로만 빼온다.
// __dirname: 실행되고 있는 경로를 빼온다.
console.log("path.dirname():", path.dirname(filename));
console.log("path.extname():", path.extname(filename));
console.log("path.basename():", path.basename(filename));
console.log(
  "path.basename - extname:",
  path.basename(filename, path.extname(filename))
);

console.log("path.parse():", path.parse(filename));
const pathInfo = path.parse(filename);
const { root, dir, base, ext, name } = pathInfo;
console.log("%s, %s, %s, %s, %s", root, dir, base, ext, name);
console.log("path.join():", path.join(__dirname, "..", "nambu"));
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "/womanup", "nambu")
);
// linux
console.log(path.posix.sep);
console.log("path.posix.join():", path.posix.join(__dirname, "nambu"));
// window
console.log(path.posix.sep);
console.log("path.win32.join():", path.win32.join(__dirname, "nambu"));
