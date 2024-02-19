import React from 'react';
import { Link } from 'react-router-dom';
import '../../Component/Discover_More/Info.css'
function Info({destination}) {

  

    return (
        <div>
            <div className="container mt-3" id='topaboutMore'>
                <div className="row">
                <div className="col-lg-12 ">
                        <div className="az">
                           <Link to='/'><span className='One1'> Tajj_Holidays </span></Link> 
                           <span className='One2 	'><i class="fa fa-arrows-h"></i> Discover_More </span>
                            <span id='top' className='One3 ' > <i class="fa fa-fighter-jet"></i>{destination} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;