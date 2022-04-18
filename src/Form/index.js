import "./style.css";
import "../index.css"; //pokminić style potem 

const Form = () => (
<form className="TUTAJ FUNKCJONALNOSC INPUTA">
<p>
  <label>
    <input maxlength={178} className="NOWY TASK " />
  </label>
</p>
<p className="formButton">
  <button className="TUTAJ FUNKCJONALNOSC PRZYCISKU">DODAJ !</button>
</p>
</form>
);

export default Form;