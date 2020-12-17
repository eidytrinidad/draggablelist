// import Swal from 'sweetalert2';

import { useEffect } from "react";
import { useRef, useState } from "react";




// Swal.fire({
//   title: '<h4>Are you sure?</h4>',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   width:"400px",
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!',
//   customClass:{
//     icon:"popup-class",
//     confirmButton:"confirm",
//     cancelButton:"cancel"
//   }
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire(
//       'Deleted!',
//       'Your file has been deleted.',
//       'success'
//     )
//   }
// })




function App() {

  
  const [formValues, setformValues] = useState({
    nombre:"",
    files:[],
    format:[]
  })

  const fileref = useRef()

  const {files,format}=formValues

  const [audio,setAudio] = useState("")

  const [nombreAudio,setNombreAudio] = useState([])

  useEffect(()=>{
    
   
    if(fileref.current.files[0]!==undefined)
    { setNombreAudio({...nombreAudio,nombreAudio:[...nombreAudio.concat(audio)]})
      
      openFile(fileref.current.files[0])
    }
  },[audio])

  var openFile = function(archivo) {
  
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      let punto=audio.indexOf('.')
    
      setformValues({...formValues,format:[...format.concat(audio.substr(punto+1))],files:[...files.concat(dataURL)]})
    };
    reader.readAsDataURL(archivo);
  };
  

  


 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(formValues);
 }

  const handleFiles =(e)=>{
    // setAudios({audios:[...audios.audios.concat(e.target.value)]})
    // setformValues({...formValues,files:[...files.concat(e.target.value)]})
  }

 
  return (
    
   <>
     <form onSubmit={handleSubmit}>
       <div className="form-group">
         <input  
         type="text"
         onChange={(e)=>setformValues({...formValues,nombre:e.target.value})}
         />
       </div>
       <div className="form-group">
       <input 
      ref={fileref}
      accept="audio/*" 
      type="file" 
      value={audio}
      className="form-control" 
      onChange={(e)=>setAudio(e.target.value)}/>
       </div>
       <button className="btn btn-primary">Enviar</button>


       <table className="table table-bordered">
         <thead>
           <tr><th>Nombre</th></tr>
         </thead>
         <tbody>
         {
          nombreAudio.length !== 0
          &&
          console.log(nombreAudio)
          //  nombreAudio.map(nombre=>(
          //    console.log(nombre)
          //  ))
          

         }
           </tbody>
       </table>
     </form>

   </>
    
  );
}

export default App;
