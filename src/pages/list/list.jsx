import './list.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Datatable from '../../components/datatable/datatable';


function List() {
    return (  
        <div className='list'>
            <Sidebar />
            <div className="list-container">
                <Navbar />
                <Datatable />
            </div>
        </div>
    );
}

export default List;