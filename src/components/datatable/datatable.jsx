import './datatable.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import {Link} from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
  

function Datatable() {
    const actionColumn = [{field: 'action', headerName: 'Action', width: 200, renderCell: ()=> {
      return (
        <div className="cellAction">
          <Link to='/users/1' className='link'>
          <div className="viewBtn">View</div>
          </Link>
          <div className="deleteBtn">Delete</div>
        </div>
      )
    } }]

    return (  
        <div className="datatable">
          <div className="datatable-title">
            <Link to='/users/new' className='link add-link'>
              Add New 
              <AddOutlinedIcon />
            </Link>
          </div>
            <DataGrid
                className='datagrid'
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default Datatable;
