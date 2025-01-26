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

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectPositioner>
        <SelectPopup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="strawberry">Strawberry</SelectItem>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Exotic Fruits</SelectGroupLabel>
            <SelectItem value="mango">Mango</SelectItem>
            <SelectItem value="dragonfruit">Dragonfruit</SelectItem>
            <SelectItem value="papaya">Papaya</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Citrus Fruits</SelectGroupLabel>
            <SelectItem value="lemon">Lemon</SelectItem>
            <SelectItem value="lime">Lime</SelectItem>
            <SelectItem value="grapefruit">Grapefruit</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Berries</SelectGroupLabel>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="raspberry">Raspberry</SelectItem>
            <SelectItem value="blackberry">Blackberry</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Tropical Fruits</SelectGroupLabel>
            <SelectItem value="pineapple">Pineapple</SelectItem>
            <SelectItem value="coconut">Coconut</SelectItem>
            <SelectItem value="guava">Guava</SelectItem>
          </SelectGroup>
        </SelectPopup>
      </SelectPositioner>
    </Select>
  );
}
