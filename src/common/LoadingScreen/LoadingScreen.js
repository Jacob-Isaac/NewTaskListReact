import cog from "./cog.png";
import { Cog } from "./styled.js";

const LoadingScreen = () => (
  <>
    <Cog src={cog} alt="Ładujemy..."></Cog>
  </>
);

export default LoadingScreen;
