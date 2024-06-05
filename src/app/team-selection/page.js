import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup } from "@/components/ui/command"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  const students = [
    { name: "John Doe", rollNumber: 101, email:"abc@gmail.com", present: true },
    { name: "Jane Smith", rollNumber: 102, email:"abc@gmail.com", present: false },
    { name: "Michael Johnson", rollNumber: 103, email:"abc@gmail.com", present: true },
    { name: "Emily Davis", rollNumber: 104, email:"abc@gmail.com", present: true },
    { name: "David Wilson", rollNumber: 105, email:"abc@gmail.com", present: false },
  ]
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Command className="rounded-lg border border-gray-200 shadow-md dark:border-gray-800 w-full">
        <CommandInput placeholder="Search students..." />
        <CommandList>
          <CommandEmpty>No students found.</CommandEmpty>
          <CommandGroup>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Student Email</TableHead>
                  <TableHead>SAP ID</TableHead>
                  <TableHead>Team member</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.rollNumber}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.rollNumber}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>
                      {student.present ? (
                        <CheckIcon className="text-green-500 h-5 w-5" />
                      ) : (
                        <XIcon className="text-red-500 h-5 w-5" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CommandGroup>
        </CommandList>
      </Command>
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