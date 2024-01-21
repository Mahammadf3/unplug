import { useEffect, useState } from "react";

import "./index.css";

const Details = () => {
  const [dataFetch, setFetch] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://5.189.180.8:8010/detail");

        if (response.ok) {
          const data = await response.json();

          const dataFormat = data.map((eachItem) => ({
            id: eachItem.sr_no,
            itemCode: eachItem.item_code,
            itemName: eachItem.item_name,
            description: eachItem.description,
            quantity: eachItem.qty,
            rating: eachItem.rate,
            varNumber: eachItem.vr_no,
          }));

          setFetch(dataFormat)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const deleteData = (value) => {
    const updatedData = dataFetch.filter((eachItem) => eachItem.id !== value);
    setFetch(updatedData);
  };

 


  return (
    <div>
        <p>Details Tables</p>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>itemCode</th>
            <th>itemName</th>
            <th>description</th>
            <th>quantity</th>
            <th>rating</th>
            <th>varNumber</th>
          </tr>
        </thead>
        <tbody>
          {dataFetch.map((eachItem) => (
          
            <tr key={eachItem.id} value={eachItem.id}>
              <td>{eachItem.id}</td>
              <td>{eachItem.itemCode}</td>
              <td>{eachItem.itemName}</td>
              <td>{eachItem.description}</td>
              <td>{eachItem.quantity}</td>
              <td>{eachItem.rating}</td>
              <td>{eachItem.varNumber}</td>
              <td>
                <button type="button" value={eachItem.id} onClick={() => deleteData(eachItem.id)}>Delete</button>
              </td>
          
            </tr>
          
        
         
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
