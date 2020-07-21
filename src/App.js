import React, { Component } from "react";
import pdfMakeTable from "./PdfMakeTable";

class App extends Component {
  _exportPdfTable = () => {
    pdfMakeTable(20);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gerar PDF</h1>
        </header>
        <p>
          <button onClick={this._exportPdfTable}>Gerar</button>
        </p>
      </div>
    );
  }
}

export default App;
