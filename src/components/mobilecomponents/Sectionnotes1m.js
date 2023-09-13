import React, { Fragment, useState } from "react";
import "../../App.css";
const renderChildRows = (row, depthLevel = 1) => {
  if (row.child) {
    const paddingLeftValue = 20 + depthLevel * 20; // Increase padding for deeper levels
    return (
      <>
        <tr key={row.child.id}>
          <td style={{ paddingLeft: `${paddingLeftValue}px` }}>
            <ul
              style={{
                listStyleType: "circle",
                paddingLeft: "20px",
                margin: 0,
              }}
            >
              {row.child.title && (
                <li>
                  {row.child.title}
                  <a style={{ color: "blue", borderBottom: "1px solid blue" }}>
                    {row.child.code !== null &&
                      row.child.code !== "null" &&
                      ` ${row.child.code}`}
                  </a>
                </li>
              )}
            </ul>
          </td>
        </tr>
        {renderChildRows(row.child, depthLevel + 1)}
      </>
    );
  }
  return null;
};

const Sectionnotes1m = ({ onCodeClick }) => {
  const [index1, setIndex1] = useState(null);

  const [fetchedData, setFetchedData] = useState(null);
  const [clickedCode, setClickedCode] = useState(null);
  React.useEffect(() => {
    console.log("enter index table");
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `codes/alldetails/index/title?filterBy=${global.clickedTab}`, {
            method:'GET',
            headers: {
              Authorization: `Bearer ${global.tokens} `// Replace with your actual token
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setIndex1(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, []);

  const search = global.searches;
  const handleCodeClick = async (code) => {
    setClickedCode(code);
    global.intable = null;
    await fetchCodeDetails(code);
    onCodeClick(code);
    global.selectedCodeDetails = fetchedData;
    global.intable = null;
    global.selectedCode = code;
    global.isCodeClicked = true;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  const fetchCodeDetails = async (code) => {
    try {
      if (code) {
        const response = await fetch(
          `/codes/${code}/details/?version=${global.years}`, {
            method:'GET',
            headers: {
              Authorization: `Bearer ${global.tokens} `// Replace with your actual token
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setFetchedData(data);
        } else {
          console.error("Failed to fetch data");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div>
        <tbody style={{ textAlign: "left" }}>
          {!global.values?.code &&
            index1
              ?.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((row) => (
                <Fragment key={row.id}>
                  <tr>
                    <td>
                      <ul
                        style={{
                          listStyleType: "square",
                          paddingLeft: "20px",
                          margin: 0,
                        }}
                      >
                        {row.nemod !== null && row.nemod !== "null" ? (
                          <li>
                            {row.title} {row.nemod}
                          </li>
                        ) : (
                          <li>{row.title}</li>
                        )}
                      </ul>
                    </td>

                    {row.seealso !== null && row.seealso !== "null" && (
                      <td>
                        <a
                          style={{
                            color: "blue",
                            borderBottom: "1px solid blue",
                          }}
                        >
                          SeeAlso {row.seealso}
                        </a>
                      </td>
                    )}
                    {row.see !== null && row.see !== "null" && (
                      <td>
                        <a
                          style={{
                            color: "blue",
                            borderBottom: "1px solid blue",
                          }}
                        >
                          See {row.see}
                        </a>
                      </td>
                    )}
                    {row.code !== null && row.code !== "null" && (
                      <td>
                        <a
                          style={{
                            color: "blue",
                            borderBottom: "1px solid blue",
                          }}
                          onClick={() => handleCodeClick(row.code)}
                        >
                          {row.code}
                        </a>
                      </td>
                    )}
                  </tr>
                  {renderChildRows(row)}
                </Fragment>
              ))}
        </tbody>
      </div>
    </>
  );
};
export default Sectionnotes1m;