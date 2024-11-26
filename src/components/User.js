import React, { useEffect, useState } from "react";

function User(props) {
    const [opts, setOpt] = useState([]);
    const [change, setChange] = useState(true);
    const [call, setCall] = useState(0);
    useEffect(() => {

        setOpt(props.permission.split(','));
    }, [])

    const divVis = (change) => {
        if (call > 0) return;
        setChange(!change);
        setCall(call + 1);
    }

    return (
        
        <tr className="each" onChange={() => divVis(change)}><td>{props.id}</td><td></td><td>{props.name}</td><td className="cks">{props.email}</td><td>{opts.map((opt) => (<div className="cboxes"><input type="checkbox" checked={opt.includes(opt)} onChange={() => {
            alert(`${opt} Permission Changed for ${props.name}`)
        }} />{opt}</div>))}</td><td ><select className="drop">
            <option value={props.role}>{props.role}</option>
            <option value={props.role === 'User' ? "Admin" : "User"}>{props.role === 'User' ? "Admin" : "User"}</option>
        </select></td><td><select className="drop">
            <option value={props.status}>{props.status}</option>
            <option value={props.status === 'Active' ? "Inactive" : "Active"}>{props.status === 'Active' ? "Inactive" : "Active"}</option>
        </select></td><td><input type="submit" className="Sub" value="Change" hidden={change} onClick={() => { alert(`${props.name} Role Edited Successfully `) }} /></td><td><i class="material-icons" onClick={() => { alert(`${props.name} Will Be Deleted Soon  `) }}>delete</i></td></tr>
    )
}

export default User;