import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { Context } from "../context/Context";
import IndividualTaskCompo from "../Individual/IndividualAddedTaskItem";

function Main3Compo() {
  const {
    value,

    setValue,
    listItems,

    ListOfItems,
    clicked,
    setClicked,
    showInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="inbox-top">
        <h4>Tasks({listItems.length})</h4>
      </div>
      {listItems ? (
        <div className="addedlist">
          <ol>
            {listItems.map((item, id) => {
              return (
                <IndividualTaskCompo {...listItems} item={item} key={id} />
              );
            })}
          </ol>
        </div>
      ) : null}

      <div className="addTasks">
        <div>
          <FontAwesomeIcon
            onClick={showInput}
            className="icon"
            icon={faPlusCircle}
          />

          <span onClick={showInput}>Add tasks...</span>

          {clicked ? (
            <div className="card addtaskscard">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{
                  border: "none",
                  textAlign: "top",
                  alignItems: "top",
                  height: "100px",
                }}
                type="text"
                placeholder="e.g. want to learn code"
              />

              <button
                onClick={() => {
                  setValue("");
                  setClicked(false);
                }}
                className="btn btn-sm btn-danger "
              >
                cancel
              </button>
              <button onClick={ListOfItems} className="btn btn-sm btn-success ">
                add Items
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="image">
        {!clicked ? <h1 className="display-6"> All clear</h1> : null}
        <img src="images/clear1.png" alt="" />
      </div>
    </div>
  );
}

export default Main3Compo;
