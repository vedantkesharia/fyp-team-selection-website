"use client";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

export default function Component() {
  const [search, setSearch] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const handleSearch = (e) => setSearch(e.target.value);
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
        sapId: "010",
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
      const searchValue = search.toLowerCase();
      return (
        student.name.toLowerCase().includes(searchValue) ||
        student.sapId.toLowerCase().includes(searchValue)
      );
    });
  }, [search]);
  const handleSelectStudent = (student) => {
    setSelectedStudents((prevSelectedStudents) => {
      if (prevSelectedStudents.includes(student)) {
        return prevSelectedStudents.filter((s) => s !== student);
      } else {
        return [...prevSelectedStudents, student];
      }
    });
  };

  const handleCreateTeam = () => {
    if (selectedStudents.length > 2) {
      toast.error("You can select at most 2 students to create a team.");
    } else {
      toast.success("Team has been successfully created");
    }
  };

  return (
    <div className="p-6 md:p-8 lg:p-10">
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-themelight dark:bg-theme p-4">
          <Input
            placeholder="Search students..."
            value={search}
            onChange={handleSearch}
            className="w-full"
          />
        </div>
        <ScrollArea className="max-h-[400px] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-4 text-left font-medium font-bold text-textbold">
                  Student Name
                </TableHead>
                <TableHead className="px-6 py-4 text-left font-medium font-bold text-textbold">
                  SAP ID
                </TableHead>
                <TableHead className="px-6 py-4 text-center font-medium font-bold text-textbold">
                  Team Status
                </TableHead>
                <TableHead className="px-6 py-4 text-center font-medium font-bold text-textbold">
                  Select
                </TableHead>
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
                        checked={selectedStudents.some(
                          (s) => s.sapId === student.sapId
                        )}
                        onCheckedChange={() => handleSelectStudent(student)}
                      />
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
      {selectedStudents.length > 0 && (
        <>
          <div className="mt-6 border rounded-lg overflow-hidden">
            <div className="bg-themelight dark:bg-theme p-4">
              <h3 className="text-lg text-whiteblack font-medium">
                Selected Members
              </h3>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6 py-4 text-left font-medium font-bold text-textbold">
                    Student Name
                  </TableHead>
                  <TableHead className="px-6 py-4 text-left font-medium font-bold text-textbold">
                    SAP ID
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="px-6 py-4">You</TableCell>
                  <TableCell className="px-6 py-4">Your SAP</TableCell>
                </TableRow>
                {selectedStudents.map((student) => (
                  <TableRow key={student.sapId}>
                    <TableCell className="px-6 py-4">{student.name}</TableCell>
                    <TableCell className="px-6 py-4">{student.sapId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-end pt-4">
            <Toaster position="bottom-left" richColors />
            <Button onClick={handleCreateTeam}>Create Team</Button>
          </div>
        </>
      )}
    </div>
  );
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
  );
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
  );
}
