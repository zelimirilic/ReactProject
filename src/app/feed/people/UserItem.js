import React from 'react'
import { User } from '../../../entities/User'
import './UserItem.css'


export const UserItem = (props) => {





    return (
        <div className="col s12">
            <div className="card horizontal" >
                <div className="commDiv">
                    <span className="textUser">{props.userInfo.name}</span>
                    <img src={props.userInfo.avatarUrl} alt="" className="circle " />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{props.userInfo.aboutShort}</p>
                        <p className='date'>{`Last post at: ` + props.userInfo.getDate()}</p>

                    </div>

                </div>
            </div >
        </div>
    )
}