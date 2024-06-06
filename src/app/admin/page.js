import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Project Management</h1>
          <Button
            className="rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
            variant="outline"
          >
            <DownloadIcon className="mr-2 h-4 w-4" /> Export to Excel
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <MicroscopeIcon className="h-5 w-5 text-gray-500" />
            <Input placeholder="Search projects..." />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Team Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Customer Relationship Management</TableCell>
              <TableCell>SAP-159</TableCell>
              <TableCell>Ethan Flores, Ava Gutierrez, Noah Jimenez</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Data Analytics Project</TableCell>
              <TableCell>SAP-654</TableCell>
              <TableCell>Christopher Gonzalez, Sophia Ramirez, Daniel Morales</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Digital Marketing Strategy</TableCell>
              <TableCell>SAP-357</TableCell>
              <TableCell>Mateo Mendoza, Isabella Reyes, Lucas Diaz</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ERP System Implementation</TableCell>
              <TableCell>SAP-789</TableCell>
              <TableCell>Michael Brown, Emily Wilson, David Kim</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">HR Management System</TableCell>
              <TableCell>SAP-951</TableCell>
              <TableCell>Emma Ortiz, Jacob Dominguez, Olivia Santana</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">IT Infrastructure Upgrade</TableCell>
              <TableCell>SAP-987</TableCell>
              <TableCell>Mia Diaz, Lucas Reyes, Isabella Sanchez</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function MicroscopeIcon(props) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}