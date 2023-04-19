import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";

export const BASE_API = 'http://localhost:3000'
export const OPTIONS = {
    dropdown: true,
    filterType: 'checkbox',
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 30],
  };
export const COLUMNS = [{
    name:"name",
    label:"Nombre",
    options:{
        filter: false,
    }
    

}, {
    name:"carnet",
    label:"Carnet",
    options:{
        filter: false,
    }
    
}, {
    name:"email",
    label:"Correo",
    options:{
        filter: false,
    }
    
}
, {
    name:"company",
    label:"Empresa",

},
{
    name:"jobTitle",
    label:"Puesto",
},
{
    name:"id",
    label:"ID",
    options:{
        filter: false,
        display: false,
    }

},
{
    name:"seeMore",
    label:"Ver más",
    options:{
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
            return (
                <Link to={`/dashboard/${tableMeta.rowData[5]}`}  >
                    Ver más
                </Link>
            );
        },
    }

},

];