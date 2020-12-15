import { useState, useEffect } from "react";
import Select from "react-select";
import { options } from "./components/iconList";

// const labelWithIcon =
// const options = [

// { value: 'fas fa-user', label:<i className="fas fa-user"></i> },
// { value: 'fas fa-restroom', label:<i className="fas fa-restroom"></i> },
// ]

function App() {
  const [formValues, setFormValues] = useState({
    color: "",
    icono: "",
  });

  const { color, icono } = formValues;
  const [comb, setComb] = useState("");

  let punto = icono.indexOf(".");

  let soloicono = icono.substr(punto + 2);

  console.log(soloicono);

  console.log(options.length);

  let styles = {
    option: (provided, state) => ({
      ...provided,
      color: color,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: color,
    }),
  };

  useEffect(() => {
    console.log(comb);
  }, [comb]);

  // const handleChange = ({ target }) => {

  // setIcono(target.value)
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComb(`${icono},${color}`);
  };

  const handleIcono = (e) => {
    setFormValues({ ...formValues, icono: e.value });
  };

  return (
    <>


      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-12 col-md-4 col-lg-4">
            <div className="input-group">
              <Select
                placeholder="Seleccione Un Icono"
                className="customSelect"
                onChange={handleIcono}
                options={options}
                styles={styles}
              />

              <div className="input-group-append">
                <input
                  type="color"
                  value={color}
                  onChange={(e) =>
                    setFormValues({ ...formValues, color: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
}

export default App;
