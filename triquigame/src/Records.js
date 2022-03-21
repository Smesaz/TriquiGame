import axios from 'axios';
import React, {useEffect, useState} from 'react';

// const getRecords = async() => {
//     try {
//         const res = await axios.get(`http://localhost:3001/records`)
//         const {data} = await res;
//         return data
//     } catch (error) {
//         console.log(error);
//         return "No se pudo conectar a la base de datos";
//     }
// }

const Records = () => {
    const [isLoading, setIsloading] = useState(true);
    const [records, setRecords] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/records")
        .then(res => res.json())
        .then(data => setRecords(data.msg));
    }, []);
    return(
        <div>
            <h1>Records</h1>
            {records.map(h => {
                return(
                    <table class="default">
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
            })}
        </div>
    )
}

export default Records;