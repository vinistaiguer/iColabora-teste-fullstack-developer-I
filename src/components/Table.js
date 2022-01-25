import "../components/Table.css";

const CustomizedTables = ({data}) => {


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="table__header task__header">Tarefa</th>
            <th className="table__header due__header">Vencido</th>
            <th className="table__header d__header">D0</th>
            <th className="table__header d__header">D1</th>
            <th className="table__header d__header">D2</th>
            <th className="table__header d__header">D3</th>
            <th className="table__header total__header">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table__body task__description">
              Fila - Aguardando tratativa
            </td>
            <td className="table__body task__value">0</td>
            <td className="table__body deZero__value">0</td>
            <td className="table__body deUm__value">0</td>
            <td className="table__body deDois__value">0</td>
            <td className="table__body deTres__value">5</td>
            <td className="table__body taskSum__values">5</td>
          </tr>
        </tbody>
        <tfoot>
          <td className="table__footer total__footer">Total</td>
          <td className="table__footer">0</td>
          <td className="table__footer">0</td>
          <td className="table__footer">0</td>
          <td className="table__footer">0</td>
          <td className="table__footer">0</td>
          <td className="table__footer">0</td>
        </tfoot>
      </table>

      <button type="button" onClick={function () {
        
      }}>Add tasks</button>

      <h2>{JSON.stringify(data)}</h2>
    </>
  );
};

export default CustomizedTables;
