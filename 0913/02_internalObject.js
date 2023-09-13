const promtPractice = () => {
  const fileName = prompt("삭제할 파일 이름을 알려주세요");

  if (fileName) {
    if (confirm(`정말 ${fileName}을/를 삭제하시겠습니까?`)) {
      alert("삭제되었습니다.");
    } else {
      alert("삭제가 취소 되었습니다.");
    }
  } else {
    alert("취소되었습니다.");
  }
};
// promtPractice();

const timingPractice = () => {
  let time = 5;
  alert(`${time}초 이후에 네이버로 이동합니다.`);
  setTimeout(() => {
    window.open("https://naver.com");
  }, 6000);

  setInterval(() => {
    document.write(time);
    console.log(time);
    if (time === 0) {
      clearInterval();
    }
    time--;
  }, 1000);
};

timingPractice();
