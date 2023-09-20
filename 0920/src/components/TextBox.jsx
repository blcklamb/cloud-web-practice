export const Description = ({ description }) => {
  return <p>{description}</p>;
};

export const Headline = ({ title }) => {
  return <h1>{title}</h1>;
};

export const Message = ({ title, description }) => {
  return (
    <>
      <Headline title={title} />
      <Description description={description} />
    </>
  );
};
