import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts") // access the API
      .then((response) => response.data) //assim que acessa, pega a data enviada pela api
      .then((data) => {
        console.log(data);
        setData(data); // Data que veio da API é enviada para o hook "data"
      });
  }, []);

  const dataArr = data.map((data, index) => {
    return (
      <tr>
        <td scope="row">{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    );
  }); // isso vai criar um elemento da tabela pra cada item puxado na api

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>body</th>
        </tr>
        {dataArr}
      </table>
    </div>
  );
}

export default App;
