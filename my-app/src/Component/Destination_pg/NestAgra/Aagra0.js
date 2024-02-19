import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Component/Destination_pg/NestAgra/Aagra0.css'
function Aagra0({destination}) {
    return (
        <div>
            <div className="container mt-3" id='topabout'>
                <div className="row">
                <div className="col-lg-12 ">
                        <div className="az">
                           <Link to='/'><span className='One1'> Tajj_Holidays </span></Link> 
                            <Link to='/destinations'><span className='One2 	'><i class="fa fa-arrows-h"></i> Destination </span></Link>
                            <span id='top' className='One3 ' > <i class="fa fa-fighter-jet"></i>{destination} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aagra0;