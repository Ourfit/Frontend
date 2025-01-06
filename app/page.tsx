import Tab from "@/components/common/tab/Tab";
import Frame from "@/components/layout/Frame";

export default function Home() {
  return (
    <Frame>
      <Tab tabs={["text", "text2", "text3"]} />
      <div style={{ textAlign: "center", height: "100px" }}>test</div>
      <div style={{ textAlign: "center", height: "100px" }}>test</div>
      <div style={{ textAlign: "center", height: "100px" }}>test</div>
      <div style={{ textAlign: "center", height: "100px" }}>test</div>
    </Frame>
  );
}
