import { Wrapper, Article } from "./styled";
import Footer from "../../common/Footer";

const AuthorPage = () => (
  <>
    <Wrapper>
      <Article>
        <h3>Praca</h3>
        <p>
          Witaj ! <br />
          To strona o mnie: Jestem
          <span>
            <b> Jakub</b>
          </span>
          , niektórzy mówią na mnie
          <span>
            <b> Kuba</b>
          </span>
          . Od lat pracuję w handlu, na różnych stanowiskach. Zajmowałem się
          sprzedażą, negocjowaniem zamówień, czy prezentowaniem produktu
          klientom. Zawsze jednak trzymałem się branży elektronicznej w tym AGD.
          W obecnych czasach rola osób fizycznych w sprzedaży staje się coraz
          mniej istotna, kosztem sprzedaży online. Dlatego z
          <em> dużą motywacją</em> zabieram się za naukę programowania.
        </p>
        <h3>Hobby</h3>
        <p>
          Moje hobby to <i>Motorsport</i>, w ostatnim czasie również
          <i> Simracing</i>. Ponadto lubię tworzyć - interesuje mnie
          <b> rysunek</b>, <b>grafika</b> komputerowa. Jeśli chodzi o sport to
          tylko <b>rower</b> - wycieczki rowerowe w ciekawe miejsca to najlepszy
          sposób aktywnego spędzania czasu.
        </p>
      </Article>
    </Wrapper>
    <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
  </>
);

export default AuthorPage;
