const Main = ({ children }) => {
  return (
    <div>
      <div className="main">
        Main
        {children.map((ele) => {
          return (
            <>
              {ele}
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
