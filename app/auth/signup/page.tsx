import Frame from "@/components/layout/Frame";
import SignupForm from "@/components/auth/signup/SignupForm";

const SignupPage = () => {
  return (
    <Frame contentStyle={{ justifyContent: "space-between" }}>
      <SignupForm />
    </Frame>
  );
};

export default SignupPage;
