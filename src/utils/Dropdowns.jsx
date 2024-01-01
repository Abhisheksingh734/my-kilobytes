
import { Select, Option } from "@material-tailwind/react";
 
export default function Dropdowns() {
  return (
    <div className="w-52 pr-4 ">
      <Select label="Select a Agent">
        <Option>Agent 1</Option>
        <Option>Agent 2</Option>
        <Option>Agent 3</Option>
        <Option>Agent 4</Option>
        <Option>Agent 5</Option>
      </Select>
    </div>
  );
}