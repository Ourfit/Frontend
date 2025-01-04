import Frame from "@/components/layout/Frame";
import Button from "@/components/common/Button";
import CheckIcon from "@/assets/images/check.svg";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";

export default function Home() {
  return (
    <Frame>
      <div style={{ textAlign: "center", height: "100px" }}>test</div>
      <div style={{ textAlign: "center", height: "100px" }}>test</div>
      <Button size={BUTTON_SIZES.LARGE} variant={BUTTON_VARIANTS.PRIMARY}>
        {"button L"}
      </Button>
      <Button size={"m"} variant={"secondary"}>
        {"button M"}
      </Button>
      <Button size={"xs"} variant={"outline"}>
        {"button XS"}
      </Button>
      <Button size={"l"} variant={"primary"} disabled={true}>
        {"button L"}
      </Button>
      <Button size={"m"} variant={"outline"} icon={<CheckIcon />}>
        {"Icon "}
      </Button>
    </Frame>
  );
}
