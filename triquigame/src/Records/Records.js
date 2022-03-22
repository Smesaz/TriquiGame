import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Ring } from 'react-awesome-spinners'
import './Records.css';

const Records = () => {

    Ring.defaultProps = {
        size: 200,
        // color: '#00bfff',
        color: '#337FE7',
        sizeUnit: 'px'
      }

    const [isLoading, setIsloading] = useState(true);
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/records")
        .then(res => res.json())
        .then(data => {setRecords(data.msg); console.log(data.msg)})
        setIsloading(false)
    }, []);
    return(
        <div className='container'>
            <div className='subcontainer_1'>
            <h1>Records</h1>
            <NavLink to='/'><button>Atrás</button></NavLink>
            </div>
            <div className='subcontainer_2'>
                {isLoading? <Ring />:
                records.map(h => {
                    return(
                        <table className="table">
                        <tr>
                          <th>Winner</th>
                          <th>Loser</th>
                          <th>Date</th>
                        </tr>
                        <tr>
                          <td>{h.winner}</td>
                          <td>{h.loser}</td>
                          <td>{h.date}</td>
                        </tr>
                        </table>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Records;