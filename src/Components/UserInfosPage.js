import React from "react";
import { userList } from "../utils/const/userList";
import { NavLink } from "react-router-dom";
import SrcContext from "../utils/context/SrcContext";
import { useContext, useState } from "react";

const UserInfosPage = () => {
  function SrcChoice() {
    const { updateSrc, setUpdateSrc } = useContext(SrcContext);

    const handleChange = (event) => {
      const value = event.currentTarget.value;
      setUpdateSrc(value);
      console.log("Source Modifiée");
    };

    return (
      <select name="src" defaultValue={updateSrc} onChange={handleChange}>
        <option value="mock">mock</option>
        <option value="api">API</option>
      </select>
    );
  }

  function ToolBar() {
    return (
      <div className="homeBtn">
        {userList.map((user) => (
          <NavLink to={`user/${user.id}`} key={user.id} className="getUser">
            <button className="dashboardBtn" key={user.id}>
              user {user.id} switch mode
            </button>
          </NavLink>
        ))}
        <SrcChoice />
      </div>
    );
  }

  const [src, setSrc] = useState("mock");

  const contextValue = {
    src,
    setUpdateSrc: setSrc,
  };

  return (
    <SrcContext.Provider value={contextValue}>
      <div className={src}>
        <ToolBar />
        <p>Source utilisée : {src}</p>
      </div>
    </SrcContext.Provider>
  );
};

// return (
//   <div className="homeBtn">
//     {userList.map((user) => (
//       <NavLink to={`user/${user.id}`} key={user.id} className="getUser">
//         <button className="mock" key={user.id}>
//           user {user.id} switch mode
//         </button>
//       </NavLink>
//     ))}
//   </div>
// );

export default UserInfosPage;
