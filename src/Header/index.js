import { useEffect, useState } from "react";
import "./index.css";

const Header = () => {
  const [dataFetch, setFetch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://5.189.180.8:8010/header");

        if (response.ok) {
          const data = await response.json();

          const dataFormat = data.map((eachItem) => ({
            id: eachItem.vr_no,
            date:eachItem.vr_date,
            accountName: eachItem.ac_name,
            Ammount: eachItem.ac_amt,
            status: eachItem.status,
          }));

          setFetch(dataFormat);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <p>Header Tables</p>
        <div className="container">
          <form>
            <input type="text"  placeholder="serialNumber"/>
            <input type="text" placeholder="data" />
            <input type="text" placeholder="accountName"/>
            <input type="text" placeholder="ammount"/>
            <input type="text" placeholder="status"/>
          </form>
        </div>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>date</th>

            <th>accountName</th>
            <th>Ammount</th>
            <th>status</th>
           
          </tr>
        </thead>
        <tbody>
          {dataFetch.map((eachItem) => (
            <tr key={eachItem.id}>
              <td>{eachItem.id}</td>
              <td>{eachItem.date}</td>
              <td>{eachItem.accountName}</td>
              <td>{eachItem.Ammount}</td>
              <td>{eachItem.status}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Header;
