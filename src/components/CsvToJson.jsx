"use client";
import Papa from "papaparse";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CsvToJson = () => {
  const [csvData, setCsvData] = useState([]);
  const [jsonData, setJsonData] = useState([]);

  const csvUploadFn = (event) => {
    const file = event.target.files[0];
    const fileType = file.name.split(".").pop().toLowerCase();
    if (fileType !== "csv") {
      alert("Please upload a CSV file.");
      return;
    }
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true,
    });
  };

  const addData = async () => {
    const capitalizeName = (name) => {
      return name
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    };

    let data = csvData.map((row) => {
      let { name, sapid, email, phone, div, rollno, graduationyear } = row;
      name = capitalizeName(name);
      return { name, sapid, email, phone, div, rollno, graduationyear };
    });

    data = data.filter((row) => {
      const { name, sapid, email, phone, div, rollno, graduationyear } = row;
      return name && sapid && email && phone && div && rollno && graduationyear;
    });

    setJsonData(data);

    const url = process.env.NEXT_PUBLIC_URL;
    const res = await fetch(`${url}/api/adddata`, {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await res.json();
    alert(`${resData.message}, insertedCount: ${resData.insertedCount}`);
  };

  return (
    <>
      <Input type="file" onChange={csvUploadFn} accept=".csv" />
      <Button
        onClick={addData}
        variant="outline"
        className="rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-gray-600 hover:text-white"
      >
        Import Excel
      </Button>
    </>
  );
};

export default CsvToJson;
