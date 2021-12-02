import {useState} from 'react'
import {Link} from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';
import DoneIcon from '@material-ui/icons/Done';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const Renvenue = () => {

const [navBar, setnavBar] = useState('leftSide')

const columns = [
  { field: 'id', headerName: 'id', width: 90 },
  { field: 'firstName', headerName: 'Title', width: 400,},
  { field: 'lastName', headerName: 'Published at', width: 170 },
  {
    field: 'Category',
    headerName: 'Category',
    type: 'number',
    width: 140,
  },
  {
    field: 'fullName',
    headerName: 'Commentable',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <DoneIcon index={params.row.id} />
          </div>
        );
      }
  },
];

const rows = [
  { id: 1, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 2, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 3, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 4, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 5, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "tech" },
  { id: 6, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 7, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "sports" },
  { id: 8, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 9, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 10, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 11, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 12, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 13, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 14, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 15, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 16, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 17, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 18, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 19, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 20, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 21, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 22, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },
  { id: 23, lastName: '11/12/2012', firstName: 'This is title of the dashboard created in React JS and Material UI', Category: "lifestyle" },

];


let burgerClick = () =>{
  setnavBar('leftSide activeNavbar');
}
let closeClick = () =>{
  setnavBar('leftSide');
  
}
    return (
        <>
               <div className="parent">
            <div className="header">
            <div className="burgerFlex"><div className="burger" onClick={burgerClick}><MenuIcon/></div><div className="logo">Brand Name</div></div>
            <nav>
                <a href="#" className="usersLink"><div className="circle"></div>User</a>

            </nav>
        </div>
            </div>


            <div className="main">
                <div className={navBar}>
                    <div className="close" onClick={closeClick}><CloseIcon/></div>
                    <div className="linkLabel link">MENU</div>
                    <Link to="/renvenue" className="link activeTab">Renveues</Link>
                    <Link to="/services" className="link">Services</Link>
                    <div className="link">Appointments</div>
                    <Link to="/login" className="link logoutBtn">Logout</Link>



                </div>
                

                  {/* right side starts */}
                <div className="rightSide">
                    <div className="title">Renveues</div>
                    <div className="exactDashboard">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
                </div>

                {/* ended */}
            </div>


        </>
    )
}

export default Renvenue
