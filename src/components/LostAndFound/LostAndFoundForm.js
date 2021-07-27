import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const LostAndFoundForm = ()=>{
    return(
        <div className="container-fluid col-10 m-auto form-container">
            <div className='row mb-2 pt-1'>
                <div className="col-12 form-header"><strong>Lost your buddy?</strong> Keep calm and complete the form.</div>
            </div>
            <form className='row'>
                <div className="col-lg-6">
                    <div className="form-group row">
                        <label htmlFor="nickname" className="col-2 col-form-label">Nickname: &nbsp; </label>
                        <div className="col-10">
                            <input className="form-control-sm" id="nickname" name="nickname" placeholder='Uncle Sam'/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="type" className="col-2 col-form-label">Type: </label>
                        <div className="col-10">
                            <input className="form-control-sm" id="type" name="type" placeholder='Dog'/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-start">
                        <label htmlFor="sex" className="col-2 col-form-label">Sex: </label>
                        <select className="col-4 form-select-sm" name="sex" id="sex">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="breed" className="col-2 col-form-label">Breed: &nbsp; </label>
                        <div className="col-10">
                            <input className="form-control-sm" id="breed" name="breed" placeholder='Golden Retriever'/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="color" className="col-2 col-form-label">Color: &nbsp; </label>
                        <div className="col-10">
                            <input className="form-control-sm" id="color" name="color" placeholder='Beige'/>
                        </div>
                    </div>
                    <div className="form-group row ">
                        <label htmlFor="height" className="col-2 col-form-label">Height:  &nbsp;</label>
                        <select className="col-4 form-select-sm" name="height" id="height">
                            <option value="small">45-70 cm</option>
                            <option value="big">71-90 cm</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group row justify-content-start">
                        <label htmlFor="features" className="col-3 col-form-label">Distinctive features:<br/>
                            <text>up to 60 char</text>
                        </label>
                        <textarea className="form-control-sm" rows="3" col="3" name='features'
                                  placeholder='blue collar with stars, no left ear, damaged tail.'/>
                    </div>
                    <div className="form-group row justify-content-start">
                        <label htmlFor="description" className="col-3 col-form-label">Description:<br/>
                            <text>up to 150 char</text>
                        </label>
                        <textarea className="form-control-sm" rows="5" col="5" name='description'
                                  placeholder='brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'/>
                    </div>
                    <div className="form-group row justify-content-start">
                        <label htmlFor="location" className="col-3 col-form-label">Location:<br/>
                        </label>
                        <textarea className="form-control-sm" rows="3" col="5" name='location'
                                  placeholder='Oliver Platz, Berlin'/>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="image" className="col-2 col-form-label">Image: </label>
                        <div className="col-10">
                            <input className="form-control-sm" id="image" name="image" placeholder='Dog'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 d-none d-md-block form-friends" ></div>
                </div>
                <div className='row justify-content-start'>
                    <label htmlFor="contacts"
                           className="col-3 col-form-label">Contacts: &nbsp; </label>
                    <div className="col-12 col-md-2">
                        <input className="form-control-sm" id="phone" name="phone" placeholder='Phone'/>
                    </div>
                    <div className="col-12 col-md-3 offset-1">
                        <input className="form-control-sm" id="email" name="email" placeholder='Email'/>
                    </div>
                </div>
                <div className='row m-md-2 justify-content-end'>
                    <div className='col-6 justify-content-end'>
                        <button type="submit" className=" m-md-2 lost-form-submit"> <FontAwesomeIcon icon={faPaw} /> Publish</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LostAndFoundForm
