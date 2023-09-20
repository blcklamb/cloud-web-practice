import { ratingStar } from "../util/ratingStar";

const Movie = (props) => {
  const { title, image, genre, releaseDate, rating, movieLength } = props;
  return (
    <div className="movieBox">
      <img className="movieImage" src={image} alt={title} />
      <div className="movieText">
        <div>제목: {title}</div>
        <div>장르: {genre}</div>
        <div>개봉일자: {releaseDate}</div>
        <div>
          평점: {rating} {ratingStar(rating)}
        </div>
        <div>상영시간: {movieLength}</div>
      </div>
    </div>
  );
};

const Movies = () => {
  const data = [
    {
      movieId: 1,
      title: "오펜하이머",
      image:
        "https://an2-img.amz.wtchn.net/image/v2/TnfLooyFVulaY3fZhLMNIw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UQTFNRFk1TWpBNU9ERTVNamt5TkRNaWZRLmdfM0lvai1JZGVCbjVFRXhYQ3VFODMwdEN4MnNEa2JKbXV4VEk3QlJPYVE",
      genre: "스릴러/드라마",
      releaseDate: "2023.08.15",
      rating: 7.3,
      movieLength: "180분",
    },
    {
      movieId: 2,
      title: "잠",
      image:
        "https://an2-img.amz.wtchn.net/image/v2/cmPETE5cBkSRo1rmw_BhTQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9URXdNemN4TmpZd01EWXlOVFF3TWpVaWZRLnJadzFiQzdPZnVOOTBHbElYYUdnbE96Sm1PaUxlQV9pZy1qV2l3VW43Z2c",
      genre: "미스터리/공포",
      releaseDate: "2023.09.06",
      rating: 6.8,
      movieLength: "94분",
    },
    {
      movieId: 3,
      title: "그대들, 어떻게 살 것인가?",
      image:
        "https://an2-img.amz.wtchn.net/image/v2/bX3LFHI8eDt-vnikBUooQQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk56RXdNREkyTXpNME9UazNNelkyTVRJaWZRLml0SUUya0dMejk2VWZWUXNXVUJpck9wVVA1Z2taQ09UYUpGRk5HeUl0bUk",
      genre: "스릴러/드라마",
      releaseDate: "2023.07.14",
      rating: 7.4,
      movieLength: "125분",
    },
    {
      movieId: 4,
      title: "극장판 엉덩이 탐정: 미스터리 가면 ~최강의 대결",
      image:
        "https://an2-img.amz.wtchn.net/image/v2/LBXiKfPbMzBuHxwPgyNYbw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9UTTROVEExT1RJeE1UUTNORGt3TXpBaWZRLnB5WHdYbHZQZklwSWdRc3BsU0l5MWduYVA2elZtcHdEcUpJYkJSVHdtMjg",
      genre: "애니메이션/가족/코미디/모험/미스터리/키즈",
      releaseDate: "2023.09.28",
      rating: 6.0,
      movieLength: "74분",
    },
  ];
  return (
    <div className="movieContainer">
      <h1>Movie</h1>
      {data.map((ele, idx) => {
        return <Movie {...ele} key={ele.movieId} />;
      })}
    </div>
  );
};

export default Movies;
