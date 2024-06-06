"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Toaster, toast } from 'sonner';

const initialData = [
  { id: 1, leader: "Vedant Kesharia", members: "Ethan Flores, Ava Gutierrez, Noah Jimenez" },
  { id: 2, leader: "Surabhi Waingankar", members: "Christopher Gonzalez, Sophia Ramirez, Daniel Morales" },
  { id: 3, leader: "Ayush Upadhyay", members: "Mateo Mendoza, Isabella Reyes, Lucas Diaz" },
  { id: 4, leader: "Sujal Choudhary", members: "Michael Brown, Emily Wilson, David Kim" },
  { id: 5, leader: "Soham Patil", members: "Emma Ortiz, Jacob Dominguez, Olivia Santana" },
  { id: 6, leader: "Isha Patade", members: "Mia Diaz, Lucas Reyes, Isabella Sanchez" },
];

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = initialData.filter(project =>
      project.id.toString().includes(lowerCaseQuery) ||
      project.leader.toLowerCase().includes(lowerCaseQuery) ||
      project.members.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  const handleClick = () => {
    toast.info('Downloading Excel file...')
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Project Teams</h1>
          <Toaster position="bottom-left" richColors/>
          <Button
            className="rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-gray-600 hover:text-white"
            variant="outline"
            onClick={handleClick}
          >
            <DownloadIcon className="mr-2 h-4 w-4" /> Export to Excel
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Table className="flex-col">
          <TableHeader>
            <TableRow>
              <TableHead className="text-bold text-lg">Project Id</TableHead>
              <TableHead className="text-bold text-lg">Team Leader</TableHead>
              <TableHead className="text-bold text-lg">Team Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map(project => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>
                <TableCell>{project.leader}</TableCell>
                <TableCell>{project.members}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
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
  );
}

