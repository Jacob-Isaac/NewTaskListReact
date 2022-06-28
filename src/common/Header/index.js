import { NavigationBox, Button } from "./styled";

const Header = () => (
<header>
      <NavigationBox> 
        {/* StandardBox */}
        <Button>
          <span>Zapisz</span>
        </Button>
        <Button>
          <span>Załaduj</span>
        </Button>
        <Button>
          <span>Usuń</span>
        </Button>
      </NavigationBox>
    </header>
);

export default Header;