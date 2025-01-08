import Frame from "@/components/layout/Frame";
import Button from "@/components/common/Button";
import EveningIcon from "@/assets/images/evening.svg";
import PlusIcon from "@/assets/images/plus.svg";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import TextButton from "@/components/common/TextButton";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import Placeholder from "@/components/common/Placeholder/Placeholder";

export default function Home() {
  return (
    <Frame>
      <SelectBar selectType="month" />
      <Placeholder />
      <div style={{ textAlign: "center", height: "100px" }}>test</div>
      <div style={{ textAlign: "center", height: "100px" }}>test</div>
      <Button size={BUTTON_SIZES.LARGE} variant={BUTTON_VARIANTS.PRIMARY}>
        {"button L"}
      </Button>
      <TextButton icon={<EveningIcon />}>{"text"}</TextButton>
      <TextButton icon={<PlusIcon />}></TextButton>
    </Frame>
  );
}
