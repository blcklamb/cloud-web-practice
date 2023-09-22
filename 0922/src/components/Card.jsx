export const Card = (props) => {
  const { name, src, intro } = props;
  return (
    <div className="item">
      <h3 className="title">{name}</h3>
      <img src={src} alt={name} />
      <p>{intro}</p>
      <p className="more">
        <a href="#" className="button">
          More Info
        </a>
      </p>
    </div>
  );
};
