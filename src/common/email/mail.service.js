import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,

    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Mail server error:", error);
  } else {
    console.log("Mail server ready");
  }
});

export const sendMail = async (to, subject, html) => {
  const info = await transporter.sendMail({
    from: `"Ngoại ngữ Xuân Lộc" <${process.env.EMAIL_USER}>`,

    to,

    subject,

    html,
  });

  console.log("Email sent:", info.messageId);
};
