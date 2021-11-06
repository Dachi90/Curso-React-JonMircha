import React, { useState, useEffect } from "react";
import { CrudProvider } from "../context/CrudContext";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  return (
    <CrudProvider>
      <div>
        <h2>CRUD API con Context API</h2>
        <article className="grid-1-2">
          <CrudForm />
          {loading && <Loader />}
          {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor={"#dc3545"} />}
          {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
        </article>
      </div>
    </CrudProvider>
  );
};

export default CrudApi;
