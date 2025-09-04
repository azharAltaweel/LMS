import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SortMenu() {
  const [selected, setSelected] = useState("Release Date (newest first)");

  const handleSelect = (eventKey) => {
    setSelected(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect} style={{textAlign:"right", padding:"20px"}}>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {selected}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Release Date (newest first)">
          Release Date (newest first)
        </Dropdown.Item>
        <Dropdown.Item eventKey="Release Date (oldest first)">
          Release Date (oldest first)
        </Dropdown.Item>
        <Dropdown.Item eventKey="Course Title (a-z)">
          Course Title (a-z)
        </Dropdown.Item>
        <Dropdown.Item eventKey="Course Title (z-a)">
          Course Title (z-a)
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortMenu;
