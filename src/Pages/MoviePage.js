/*import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const MoviePage = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let Movies = [];

    useEffect(() => {
      console.log("hello");
      db.collection("movies").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          console.log(Movies);
          switch (doc.data().Movie) {
            case "yes":
              Movies = [...Movies, { id: doc.id, ...doc.data() }];
              break;
          }
        });
  
        dispatch(
          setMovies({
            Movie: Movies,
          })
        );
      });
    }, [userName]);
  
    return (
      <Container>
        <h1>ALL MOVIES</h1>
       <Movies/>
      </Container>
    );
  };
  
  const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
  
    &:after {
      background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
    }
  `;

  export default MoviePage;
  */