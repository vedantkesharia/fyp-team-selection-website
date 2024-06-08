const sendMail = async (email, otp) => {
  const url = process.env.NEXT_PUBLIC_URL;
  const data = await fetch(`${url}/api/sendmail`, {
    method: "POST",
    body: JSON.stringify({ email, otp }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await data.json();

  return resData.success;
};

export default sendMail;
