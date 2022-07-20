import { NavigationBox, Buttons, Button } from "./styled";

const Header = ({ title }) => (
  <NavigationBox name="StandardBox">
    {title}
    <Buttons>
      <Button>
        <span>Zapisz</span>
      </Button>
      <Button>
        <span>Załaduj</span>
      </Button>
      <Button>
        <span>Usuń</span>
      </Button>
    </Buttons>
  </NavigationBox>
);

export default Header;
