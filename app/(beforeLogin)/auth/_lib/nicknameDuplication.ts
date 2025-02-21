export async function nicknameDuplication(nickname: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/check-availability?field=nickname&value=${nickname}`,
    );

    switch (response.status) {
      case 204:
        return { available: true, message: "" };
      case 409:
        return { available: false, message: "중복되는 닉네임이에요" };
      case 400:
        return { available: false, message: "잘못된 형식이에요" };
      default:
        return { available: false, message: "오류 발생" };
    }
  } catch (err) {
    console.log(err);
    return { available: false, message: "네트워크 오류 발생" };
  }
}
