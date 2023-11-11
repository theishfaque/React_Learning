import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const RecordKeeping = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function addData() {
    setData([...data, { name, lastname, email }]);
    setName("");
    setLastName("");
    setEmail("");
  }

  function removeItem(index) {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  return (
    <div className="w-screen h-screen bg-sky-100">
      <h1 className="text-center bg-sky-700 text-white text-2xl font-bold p-4">
        Record Keeping
      </h1>
      <div className="mt-12 ml-80">
        <Stack direction="row" spacing={3}>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className=" mt-4">
        <h1 className="font-bold text-lg flex justify-center py-6 ml-10">
          Users Data
        </h1>
        <div className="flex justify-center w-screen">
          <div className="flex justify-center gap-36 bg-sky-100 rounded-md p-4 my-1 shadow-2xl text-black font-bold">
            <h4>First Name</h4>
            <h4>Last Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
        </div>

        {data.map((element, index) => {
          return (
            <div key={index} className="flex justify-center w-screen ">
              <div className="flex justify-center gap-36 bg-sky-100 rounded-md p-4 my-1 shadow-2xl text-black font-bold">
                <h4>{element.name}</h4>
                <h4>{element.lastname}</h4>
                <h4>{element.email}</h4>
                <Button
                  onClick={() => removeItem(index)}
                  variant="outlined"
                  color="error"
                >
                  <DeleteForeverIcon />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecordKeeping;
