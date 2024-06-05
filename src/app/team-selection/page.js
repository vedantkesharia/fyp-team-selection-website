"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Component() {
  const [search, setSearch] = useState("")
  const [selectedStudents, setSelectedStudents] = useState([])
  const handleSearch = (e) => setSearch(e.target.value)
  const filteredData = useMemo(() => {
    return [
      {
        name: "John Doe",
        sapId: "001",
        status: "Passed",
      },
      {
        name: "Jane Smith",
        sapId: "002",
        status: "Failed",
      },
      {
        name: "Michael Johnson",
        sapId: "003",
        status: "Passed",
      },
      {
        name: "Emily Davis",
        sapId: "004",
        status: "Failed",
      },
      {
        name: "David Wilson",
        sapId: "005",
        status: "Passed",
      },
      {
        name: "David Wilson",
        sapId: "005",
        status: "Failed",
      },
      {
        name: "LALA",
        sapId: "006",
        status: "Passed",
      },
      {
        name: "Theo Shy",
        sapId: "007",
        status: "Failed",
      },
    ].filter((student) => {
      const searchValue = search.toLowerCase()
      return student.name.toLowerCase().includes(searchValue) || student.sapId.toLowerCase().includes(searchValue)
    })
  }, [search])
  const handleSelectStudent = (student) => {
    setselectedStudents((prevSelectedStudents) => {
      if (prevSelectedStudents.includes(student)) {
        return prevSelectedStudents.filter((s) => s !== student);
      } else {
        return [...prevSelectedStudents, student];
      }
    });
  };
  return (
    <div className="p-6 md:p-8 lg:p-10">
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-100 dark:bg-gray-950 p-4">
          <Input placeholder="Search students..." value={search} onChange={handleSearch} className="w-full" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-6 py-4 text-left font-medium font-bold text-black">Student Name</TableHead>
              <TableHead className="px-6 py-4 text-left font-medium font-bold text-black">SAP ID</TableHead>
              <TableHead className="px-6 py-4 text-center font-medium font-bold text-black">Status</TableHead>
              <TableHead className="px-6 py-4 text-center font-medium font-bold text-black">Select</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((student) => (
              <TableRow key={student.sapId}>
                <TableCell className="px-6 py-4">{student.name}</TableCell>
                <TableCell className="px-6 py-4">{student.sapId}</TableCell>
                <TableCell className="px-6 py-4 text-center flex justify-center">
                  {student.status === "Passed" ? (
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  ) : (
                    <XIcon className="w-5 h-5 text-red-500" />
                  )}
                </TableCell>
                <TableCell className="px-6 py-4 text-center">
                  {student.status === "Failed" ? (
                    <Checkbox
                      id={`student-${student.sapId}`}
                      // checked={selectedStudents.includes(student)}
                      onChange={() => handleSelectStudent(student)}
                    />
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedStudents.length > 0 && (
        <div className="mt-6 border rounded-lg overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-950 p-4">
            <h3 className="text-lg font-medium">Selected Students</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-4 text-left font-medium">Student Name</TableHead>
                <TableHead className="px-6 py-4 text-left font-medium">SAP ID</TableHead>
                <TableHead className="px-6 py-4 text-center font-medium">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedStudents.map((student) => (
                <TableRow key={student.sapId}>
                  <TableCell className="px-6 py-4">{student.name}</TableCell>
                  <TableCell className="px-6 py-4">{student.sapId}</TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    <XIcon className="w-5 h-5 text-red-500" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}