import EveningIcon from "@/assets/images/evening.svg";
import PlusIcon from "@/assets/images/plus.svg";
import Button from "@/components/common/Button";
import Tab from "@/components/common/Tab/Tab";
import TextButton from "@/components/common/TextButton";
import Frame from "@/components/layout/Frame";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";

export default function Home() {
  return (
    <Frame style={{ height: "100svh" }}>
      <Tab tabs={["text", "text2", "text3"]} />
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
