import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import "../../App.css";
import React, { useEffect, useState } from "react";
const Codedetm = () => {
  console.log("enter codedet page");
  console.log(global.index, "codedet index value");
  const [result, setResult] = useState(null);
  const [result1, setResult1] = useState(null);
  const [isClosed, setIsClosed] = useState(false);
  console.log(global.results);
  console.log(global.values.code);
  useEffect(() => {
    if (global.selectedCodeDetails) {
      setResult(global.selectedCodeDetails);
    } else {
      setResult(null);
    }
  }, [global.selectedCodeDetails]);
  const Code = (global.values?.code || '').replace(/[-.]/g, '');
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (global.values && global.values.code && global.years) {
          const response = await fetch(
            `/codes/${Code}/details/?version=${global.years}`, {
              method:'GET',
              headers: {
                Authorization: `Bearer ${global.tokens} `// Replace with your actual token
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setResult(data);
          } else {
            console.error("Failed to fetch data");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values]);
  const handleClose = () => {
    setIsClosed(true);
    window.location.reload();
  };
  console.log("our result is", result);
  return (
    <div className="division">
      {result && (
        <div>
          <div>
            <Button
              disableFocusRipple
              disableRipple
              sx={{
                border: "0.5px solid green",
                textAlign: "center",
                height: "20px",
                width: "auto",
                backgroundColor: "#ADD8E6",
                marginLeft: "125px",
              }}
            >
              {result.code}
              <Close
                sx={{
                  width: "20px",
                  ml: "5px",
                  color: "#4169E1",
                }}
                onClick={handleClose}
              />
            </Button>
          </div>
          <table style={{ marginLeft: "160px" }}>
            <tbody>
              {result && (
                <tr key={result.code}>
                  <td>{result.code}</td>
                  <td>{result.longDescription}</td>
                  <td>
                    {result.billable === true ? (
                      <Button
                        variant="contained"
                        sx={{
                          width: "130px",
                          height: "2vh",
                          color: "white",
                          fontFamily: "sans-serif",
                          backgroundColor: "green",
                          textTransform: "lowercase",
                          fontWeight: "700px",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: "green",
                          },
                        }}
                      >
                        Billable Codes
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        disableElevation
                        disableFocusRipple
                        sx={{
                          color: "white",
                          width: "150px",
                          height: "2vh",
                          fontFamily: "sans-serif",
                          backgroundColor: "orange",
                          textTransform: "lowercase",
                          fontWeight: "700px",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: "orange",
                          },
                        }}
                      >
                        NonBillable Codes
                      </Button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Codedetm;