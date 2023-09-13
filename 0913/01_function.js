/* 실행하면 오류가 나요
ReferenceError: Cannot access 'sum' before initialization */
/* 익명함수로 할당된 변수는 호이스팅의 효과를 변수보다 늦게 받는다 */
const ananymousFn = function () {
  let sum1 = sum(21, 24);
  let sum2 = sum(10, 20);

  const sum = function (a, b) {
    return a + b;
  };
};

/* constructor */
// 1. 생성자 함수 정의와 객체 생성
function BookInfo(title, price, id) {
  this.name = title;
  this.publisher = "한빛미디어";
  this.realprice = price * 0.9;
  this.weblink = `https://www.yes24.com/Product/Goods/${id}`;
}

let book_constructor = new BookInfo("처음 배우는 Azure", 34_000, 96247073);
console.log(book_constructor.realprice);

// 2. 생성자 vs 객체 리터럴
let book_object_literal_0 = {
  name: "처음 배우는 NHN 클라우드",
  publisher: "한빛미디어",
  price: 28_000,
  weblink: `https://www.yes24.com/Product/Goods/118100344`,
};

let book_object_literal_1 = {
  name: "Azure를 활용한 클라우드 네이티브 인프라",
  publisher: "애이콘 출판사",
  price: 40_000,
  weblink: "https://www.yes24.com/Product/Goods/118507169",
};

// 3. new 연산자로 독립적인 객체 생성
let book_constructor_0 = new BookInfo(
  "처음 배우는 NHN 클라우드",
  28_000,
  118100344
);
let book_constructor_1 = new BookInfo(
  "Azure를 활용한 클라우드 네이티브 인프라",
  40_000,
  118507169
);

// 4. 생성자 함수 내에 익명 함수 사용
BookInfo.prototype.consolePrice = function () {
  return `할인된 가격은 ${this.realprice}원 입니다.`;
};
console.log(book_constructor_1.consolePrice());

// 5. return 문 사용 가능
// 접근한정자에 따라 처리 private, public, protected
function PrivateBookInfo(title, price, id) {
  this.name = title;
  this.publisher = "한빛미디어";
  this.realprice = price * 0.9;
  this.weblink = `https://www.yes24.com/Product/Goods/${id}`;
  return {
    userType: "member",
    price: price,
  };
}

let p_book_constructor_2 = PrivateBookInfo(
  "Azure와 도커를 활용한 마이크로서비스 구현",
  30_000,
  40953108
);
console.log(p_book_constructor_2.name); // undefine
console.log(p_book_constructor_2.price);

/* 자바스크립트 내장 객체 */
