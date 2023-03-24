import Button from "./Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [value, setValue] = useState("");
  const [id, setId] = useState(null);
  const [data, setData] = useState([{ id: 1, task: "Add Task 1" }]);
  const [editing, setEditing] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (!editing) {
      let tempObj = { id: uuidv4(), task: value };
      console.log(tempObj);
      setData([...data, tempObj]);
      setValue("");
    } else {
      const updateData = data.map((obj) => {
        if (obj.id === id) {
          return { ...obj, task: value };
        }
        return obj;
      });

      setData(updateData);
      setValue("");
      setEditing(false);
    }
  };

  const handleDelete = (key) => {
    console.log("delte buton key: ", key);
    const tempArr = data.filter((obj) => obj.id !== key);
    setData(tempArr);
  };

  const handleEdit = (e) => {
    setEditing(true);
    setValue(e.task);
    setId(e.id);
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Add Task"
          style={{ width: "300px", margin: "20px", padding: "8px" }}
        />
        <Button handleClick={handleClick}>
          {editing ? "Edit" : "Add"} Task
        </Button>
      </form>
      <ul>
        {data.map((obj) => (
          <div
            key={obj.id}
            style={{
              width: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "3px",
              border: "1px solid #9d9d9d",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <li style={{ listStyle: "none" }}>
              {obj.task}
              <Button
                handleClick={() => {
                  handleDelete(obj.id);
                }}
              >
                X
              </Button>
              <Button
                handleClick={() => {
                  handleEdit(obj);
                }}
              >
                Edit
              </Button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Form;
