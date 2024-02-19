import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Component/Destination_pg/Info/Info.css'
function Info(props) {
    return (
        <div>
            <div className="container mt-3" id='infodes'>
                <div className="row">
                <div className="col-lg-12 ">
                        <div className="a">
                           <Link to='/'><span className='One1'> Tajj_Holidays </span></Link> 
                           <span className='One2 	fa fa-arrows-h'> Destination </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;