const Header = ({ handleClick }) => {
  return (
    <div className="header" onClick={handleClick}>
      <div>홈</div>
      <div>여행</div>
      <div>고객 센터</div>
    </div>
  );
};

export default Header;
