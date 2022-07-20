import "../../GlobalStyle.js";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import MainContainer from "../../common/MainContainer";

function AuthorPage()  {
  return (
    <>
      <Header title="O autorze" />
      <MainContainer>
       Jakub Nowakowski jest autorem.<br/>Autor jest fajny i najlepszy, i nie ma lepszego autora.<br/>Autor posiada tak bogaty życiorys, że hoho.<br/><br/>
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>
    </>
  );
}

export default AuthorPage;
