import axios from "axios";

export const sendApplyForRoleEmail = async (
  name: string,
  email: string,
  phoneNumber: string,
  file: File | null,
  position: string
) => {
  const msg = {
    to: "jobs@narsun.pk",
    from: email,
    subject: `Want to apply for ${position}`,
    text: `  Hello,
    Hi I want to apply for the position of ${position}
    Name:  ${name}
    email: ${email}
    Contact number: ${phoneNumber}
    `,
  };

  try {
    const emailing = await axios.post("https://narsunstudios.com/mail/", {
      subject: `Want to apply for  ${position}`,
      content: msg.text,
      to: "info@narsun.pk",
    });
    // console.log(emailing);
    // console.log("Email Sent Apply for job");
  } catch (error: any) {
    console.error(error, "Error During Sending Email Apply for job");
    if (error.response) {
      console.error(error.response.body);
    }
  }
};
