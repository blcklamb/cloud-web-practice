import React from "react";

function List() {
  const bucketList = [
    { id: 0, action: "책사인회 개최", genre: "영향력" },
    { id: 1, action: "세 달 간 유럽 여행", genre: "힐링" },
    { id: 2, action: "4개 국어 원어민 수준으로 구사", genre: "자기계발" },
    { id: 3, action: "가족지양적 비영리단체 설립 기여", genre: "영향력" },
    { id: 4, action: "사회인 밴드 구성하여 정기 공연", genre: "네트워크" },
    { id: 5, action: "지식 공유자되어 5만 수강생 달성", genre: "영향력" },
  ];

  const GENRE = "영향력";

  const filteredBucketList = bucketList.filter(
    (item) => item.genre === "영향력"
  );

  return (
    <div className="listWrapper">
      <h2>나의 버킷리스트</h2>
      <ul>
        {bucketList.map((item, idx) => (
          <li key={idx}>{item.action}</li>
        ))}
      </ul>
      <h3>키워드: {GENRE}</h3>
      <ul>
        {filteredBucketList.map((ele) => (
          <li key={ele.id}>{ele.action}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
