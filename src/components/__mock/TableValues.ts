import { TableProps } from "components/table";

export const TableExample: TableProps = {
  columns: [
    { name: "FULL NAME", key: "full_name", sortable: true },
    { name: "EMAIL", key: "email", sortable: true },
    { name: "GENDER", key: "gender", sortable: true },
    { name: "AGE", key: "age", sortable: true },
  ],
  rows: [
    {
      full_name: "John Doe",
      email: "john.doe@email.com",
      gender: "Male",
      age: 30,
    },
    {
      full_name: "Jane Doe",
      email: "jane.doe@email.com",
      gender: "Female",
      age: 25,
    },
    {
      full_name: "Bob Smith",
      email: "bob.smith@email.com",
      gender: "Male",
      age: 35,
    },
    {
      full_name: "Amy Brown",
      email: "amy.brown@email.com",
      gender: "Female",
      age: 28,
    },
    {
      full_name: "Michael Johnson",
      email: "michael.johnson@email.com",
      gender: "Male",
      age: 40,
    },
    {
      full_name: "Emily Davis",
      email: "emily.davis@email.com",
      gender: "Female",
      age: 32,
    },
    {
      full_name: "William Wilson",
      email: "william.wilson@email.com",
      gender: "Male",
      age: 45,
    },
    {
      full_name: "Ashley Johnson",
      email: "ashley.johnson@email.com",
      gender: "Female",
      age: 27,
    },
    {
      full_name: "David Anderson",
      email: "david.anderson@email.com",
      gender: "Male",
      age: 37,
    },
    {
      full_name: "Sophia Wilson",
      email: "sophia.wilson@email.com",
      gender: "Female",
      age: 29,
    },
  ],
};
