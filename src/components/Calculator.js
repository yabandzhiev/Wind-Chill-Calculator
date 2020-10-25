import React, { useState } from "react";
import "../styles/Calculator.css";

function Calculator() {
  const [mphInput, setMphInput] = useState("");
  const [airTemp, setAirTemp] = useState("");
  const [result, setResult] = useState("");

  const handleOnChangeMph = (e) => {
    return setMphInput(e.target.value);
  };
  const handleOnChangeAir = (e) => {
    return setAirTemp(e.target.value);
  };

  const handleOnClickWind = (e) => {
    return setMphInput("");
  };
  const handleOnClickTemp = (e) => {
    return setAirTemp("");
  };

  const windChill = (e) => {
    e.preventDefault();
    let chill =
      0.0817 *
        (3.71 * Math.pow(mphInput, 0.5) + 5.81 - 0.25 * mphInput) *
        (airTemp - 91.4) +
      91.4;
    if (isNaN(chill)) {
      return (document.getElementById("result").value = "Input not valid");
    } else {
      return setResult(chill);
    }
  };

  return (
    <div className="calculator">
      <form>
        <center>
          <table className="table" cellPadding="3" cellSpacing="0">
            <tbody>
              <tr>
                <td>Wind Speed (MPH) =</td>
                <td>
                  <input
                    type="text"
                    value={mphInput}
                    onChange={handleOnChangeMph}
                    onClick={handleOnClickWind}
                  />
                </td>
              </tr>

              <tr>
                <td>Air Temperature (ºF) =</td>
                <td>
                  <input
                    type="text"
                    value={airTemp}
                    onChange={handleOnChangeAir}
                    onClick={handleOnClickTemp}
                  />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">
                  <br />
                  <input
                    className="resultButton"
                    type="button"
                    value="Calculate Wind Chill"
                    onClick={windChill}
                  />
                  <br />
                  <br />
                  <input
                    id="result"
                    value={result}
                    style={{ outline: "none", cursor: "auto" }}
                    type="text"
                    readOnly
                  />
                  ºF
                </td>
              </tr>
            </tfoot>
          </table>
        </center>
      </form>
    </div>
  );
}

export default Calculator;
