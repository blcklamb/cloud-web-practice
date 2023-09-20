const Movie = (props) => {
  const { title, image, genre, releaseDate, rating, movieLength } = props;
  return (
    <div className="main">
      <img className="movieImage" src={image} alt={title} />
      <div>
        <div>{title}</div>
        <div>{genre}</div>
        <div>{releaseDate}</div>
        <div>{rating}</div>
        <div>{movieLength}</div>
      </div>
    </div>
  );
};

const Movies = () => {
  const data = [
    {
      title: "오펜하이머",
      image:
        "https://an2-img.amz.wtchn.net/image/v2/TnfLooyFVulaY3fZhLMNIw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UQTFNRFk1TWpBNU9ERTVNamt5TkRNaWZRLmdfM0lvai1JZGVCbjVFRXhYQ3VFODMwdEN4MnNEa2JKbXV4VEk3QlJPYVE",
      genre: "스릴러/드라마",
      releaseDate: "2023.08.15",
      rating: 7.3,
      movieLength: "180분",
    },
    {
      title: "잠",
      image:
        "https://an2-img.amz.wtchn.net/image/v2/cmPETE5cBkSRo1rmw_BhTQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9URXdNemN4TmpZd01EWXlOVFF3TWpVaWZRLnJadzFiQzdPZnVOOTBHbElYYUdnbE96Sm1PaUxlQV9pZy1qV2l3VW43Z2c",
      genre: "미스터리/공포",
      releaseDate: "2023.09.06",
      rating: 6.8,
      movieLength: "94분",
    },
    {
      title: "그대들, 어떻게 살 것인가?",
      image:
        "https://an2-img.amz.wtchn.net/image/v2/bX3LFHI8eDt-vnikBUooQQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk56RXdNREkyTXpNME9UazNNelkyTVRJaWZRLml0SUUya0dMejk2VWZWUXNXVUJpck9wVVA1Z2taQ09UYUpGRk5HeUl0bUk",
      genre: "스릴러/드라마",
      releaseDate: "2023.07.14",
      rating: 7.4,
      movieLength: "125분",
    },
  ];
  return (
    <div>
      <h1>Movie</h1>
      {data.map((ele, idx) => {
        return <Movie {...ele} key={idx} />;
      })}
    </div>
  );
};

export default Movies;
