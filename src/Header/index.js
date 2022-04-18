import "./style.css";

const Header = () => (
<header>
      <div className="navigation allBoxesProperties">
        <button className="navigation__links">
          <span>Zapisz</span>
        </button>
        <button className="navigation__links">
          <span>Załaduj</span>
        </button>
        <button className="navigation__links">
          <span>Usuń</span>
        </button>
      </div>
    </header>
);

export default Header;