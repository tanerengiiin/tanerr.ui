import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectPositioner,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/store/default/ui/select";

export default function BackdropSelectDemo() {
  return (
    <Select defaultValue="typescript">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectPositioner backdrop>
        <SelectPopup>
          <SelectGroup>
            <SelectGroupLabel>Popular</SelectGroupLabel>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Backend</SelectGroupLabel>
            <SelectItem value="java">Java</SelectItem>
            <SelectItem value="csharp">C#</SelectItem>
            <SelectItem value="php">PHP</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Mobile</SelectGroupLabel>
            <SelectItem value="swift">Swift</SelectItem>
            <SelectItem value="kotlin">Kotlin</SelectItem>
            <SelectItem value="dart">Dart</SelectItem>
          </SelectGroup>
        </SelectPopup>
      </SelectPositioner>
    </Select>
  );
}
