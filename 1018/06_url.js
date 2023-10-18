const myURL = new URL(
  `http://wizard:password@apis.nambu.co.kr:8080/path1/path2?serviceKey&base_date=20231006&dataType=JSON&numberOfRows=10&pageNo=1&category=api&category=geo`
);

console.log("myURL", myURL);
const searchParams = myURL.searchParams;
console.log("searchParams", searchParams);
console.log("searchParams.getAll()", searchParams.getAll("category"));
console.log("searchParams.get()", searchParams.get("category"));
console.log("searchParams.get()", searchParams.get("numberOfRows"));
console.log("searchParams.has()", searchParams.has("pageNo"));
console.log("searchParams.keys()", searchParams.keys());
console.log("searchParams.values()", searchParams.values());

searchParams.append("fruit", "apple");
searchParams.append("fruit", "banana");
console.log("after append", searchParams.getAll("fruit"));
console.log(searchParams.toString());

// append는 추가, set은 바꿔치기
searchParams.set("fruit", "peach");
console.log("after set", searchParams.getAll("fruit"));

searchParams.delete("fruit");
console.log("after delete", searchParams.getAll("fruit"));
