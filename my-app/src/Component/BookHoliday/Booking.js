import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Component/BookHoliday/Booking.css'
import axios from 'axios'
function Booking(props) {

    const [add, setAddMob] = useState(false)
    const [data, setData] = useState({
        name: '',
        mobile: '',
        email: '',
        destination: '',
        date: '',
        city: '',
        pinCode: '',
        state: '',
        alternateMobile: ''
    })

    const addone = () => {
        setAddMob(!add)
    }

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitForm = (e) => {
        e.preventDefault()
        const SendPost = axios.post("http://localhost:4400/", data)
        if (SendPost) {
            setData({
                name: '',
                mobile: '',
                email: '',
                destination: '',
                date: '',
                city: '',
                pinCode: '',
                state: '',
                alternateMobile: ''
            })
            alert('message sent sucessFull')
        }
        else {
            alert('message sent UnsucessFull')

        }
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    <form class="row g-3 needs-validation" novalidate onSubmit={submitForm}>
                        <div class="col-md-6 mt-3">
                            <label id='hl' for="validationCustom01" class="form-label mx-3">Full Name (Required)*</label>
                            <input name='name' value={data.name} onChange={changeHandler} type="text" class="form-control" id="validationCustom01" placeholder='Enter Name' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-6 mt-3">
                            <label for="validationCustom02" class="form-label mx-3"> Mobile Number</label>
                            <input name='mobile' value={data.mobile} onChange={changeHandler} type="number" class="form-control" id="validationCustom02" placeholder='Mobile Number ' required></input>
                        </div>
                        {/* ========================= */}

                        <div class="col-md-6 mt-4">
                            <label for="validationCustom03" class="form-label mx-3"> Email</label>
                            <input name='email' value={data.email} onChange={changeHandler} type="email" class="form-control" id="validationCustom03" placeholder='Email ID' required></input>
                        </div>
                        {/* ========================= */}

                        <div class="col-md-6 mt-4">
                            <label for="validationCustom04" class="form-label mx-3"> Destination (Required)*</label>
                            <input name='destination' value={data.destination} onChange={changeHandler} type="text" class="form-control" id="validationCustom04" placeholder=' Destination Name' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-6 mt-4">
                            <label for="validationCustom05" class="form-label mx-3"> Starting Date (Required)*</label>
                            <input name='date' value={data.date} onChange={changeHandler} type="date" class="form-control" id="validationCustom05" placeholder=' Travel Starting Date' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-4 mt-4">
                            <label for="validationCustom06" class="form-label mx-3"> City </label>
                            <input name='city' value={data.city} onChange={changeHandler} type="text" class="form-control" id="validationCustom06" placeholder=' Your City' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-4 mt-4">
                            <label for="validationCustom07" class="form-label mx-3">Pin Code</label>
                            <input name='pinCode' value={data.pinCode} onChange={changeHandler} type="Number" class="form-control" id="validationCustom07" placeholder='Pin Code' required></input>
                        </div>
                        {/* ========================= */}
                        <div class="col-md-4 mt-4 ">
                            <label for="validationCustom08" class="form-label mx-3">State</label>
                            <input name='state' value={data.state} onChange={changeHandler} type="text" class="form-control" id="validationCustom08" placeholder='Your State' required></input>

                        </div>

                        {/* ========================= */}
                        {
                            add ? <div class="col-md-6 mt-4">
                                <label for="validationCustom09" class="form-label mx-3">Alternate Mobile Number</label>
                                <input name='alternateMobile' value={data.alternateMobile} onChange={changeHandler} type="text" class="form-control" id="validationCustom09" placeholder='Alternate Mobile' required></input>

                                <Link> <span onClick={() => addone()} className='mx-3'> - Cancle this</span> </Link>

                            </div>

                                : <Link> <span id='plus' className='mt-4' onClick={() => addone()}> + <span id='alt' className='mx-2' > Add Alternate Phone Number </span></span> </Link>
                        }
                        {/* ========================= */}

                        {/* ========================= */}
                        <div class="col-12 mt-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                <label id='check' class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>

                            </div>
                        </div>

                        {/* ========================= */}
                        <div class="col-12 mt-4">
                            <button class="btn btn-primary" type="submit"> Submit </button>
                        </div>
                        {/* ========================= */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Booking;