import { NavigationBox, NavigationButton } from "./styled";

const Header = () => (
<header>
      <NavigationBox> 
        {/* StandardBox */}
        <NavigationButton>
          <span>Zapisz</span>
        </NavigationButton>
        <NavigationButton>
          <span>Załaduj</span>
        </NavigationButton>
        <NavigationButton>
          <span>Usuń</span>
        </NavigationButton>
      </NavigationBox>
    </header>
);

export default Header;