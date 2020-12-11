import { useState } from "react";

//import Prueba2 from './components/Prueba2'
function App() {

  const [formValues, setFormValues] = useState({
    color:"",
    icono:""
  })

  const {color,icono} =formValues
  const [comb, setComb] = useState("");

  // const handleChange = ({ target }) => {
    
  //  setIcono(target.value)
  // };
  
  var n = comb.indexOf(",");

  let soloicono=comb.substr(0, n);
  let color2=comb.substr(n+1,comb.length);


  const style={
    color:`${color2}`,
 
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    setComb(`${icono},${color}`)
  
  }
 
  return (
    <>
    {
        console.log(comb)
    }
      {/* <select id="select_graphtype" className="form-control fa">
        <option value="fas fa-restroom"> &#xf7bd;</option>
        <option value="fa fa-address-card"> &#xf2bb; </option>
      </select> */}

      {/* <select className="form-control">
        <option>&#xf007;</option>
        <option>&#xf0c0;</option>
        <option>&#xf7bd;</option>
        <option>&#xf045;</option>
        <option>&#xf046;</option>
      </select> */}

      <form onSubmit={handleSubmit}>

      <select 
      className="form-control" 
      value={icono}
      onChange={(e)=>setFormValues({...formValues,icono:e.target.value})}>
        {/* <option value="fas fa-users,red" > &#xf0c0;</option>
        <option value="fas fa-user,green" > &#xf007;</option>
        <option value="fas fa-restroom,blue"> &#xf7bd;</option> */}
        <option value={`fas fa-users`}> &#xf0c0;</option>
        <option value={`fas fa-user`}> &#xf007;</option>
        <option value={`fas fa-restroom`}> &#xf7bd;</option>
      </select>

     <input 
     className="form-control"
     type="color" 
     name="favcolor" 
     onChange={(e)=>setFormValues({...formValues,color:e.target.value})}/>

      <button className="btn btn-primary">Enviar</button>
  </form>

      <table>
        <tbody>
          <tr>
            <td style={style}>
              <i  className={soloicono}></i>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}



export default App;
