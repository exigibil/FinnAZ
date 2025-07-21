import React from "react";
import * as XLSX from "xlsx";
import styles from "./FileInput.module.css";

function FileInput() {
  const [data, setData] = React.useState(null);

  const handleFileUpoload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);
      setData(sheetData);
    };
    reader.readAsBinaryString(file);
  };
  return (
    <div className={styles.fileInputContainer}>
      <form>
        <input type="month" id="start" name="start" min="2022-01" />
        <input type="reset" value="Reset" />
        <div>
          <input type="file" onChange={handleFileUpoload} />
         
        </div>
      </form>

      <div className={styles.financialsHeader}>
        <h3>Financials</h3>
      </div>

      <div className={styles.financialsContent}>
        {data && (
          <div className={styles.dataDisplay}>
            <h3>Data from Excel:</h3>
            <table>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, idx) => (
                      <td key={idx}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          //<div>
          // <h3>Data from Excel:</h3>
          // <pre>{JSON.stringify(data, null, 2)}</pre>
          //</div>
        )}
      </div>
    </div>
  );
}

export default FileInput;
