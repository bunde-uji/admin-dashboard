import {useState} from 'react';
import './new.scss';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';


function New({inputs, title}) {
    const [file, setFile] = useState('')

    return (  
        <div className='new'>
            <Sidebar />
            <div className="new-container">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="form-input">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className='icon' />
                                </label>
                                <input type="file" onChange={e => setFile(e.target.files[0])} id='file' style={{display: 'none'}} />
                            </div>

                            {inputs.map(input => {
                                return (
                                    <div className="form-input" key={input.id}>
                                        <label htmlFor={input.id}>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                )
                            })}

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;