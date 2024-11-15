const express = require("express");
const { Resend } = require("resend");
const app = express();
require("dotenv").config();

const resendApiKey = process.env.API_KEY;

const resend = new Resend(resendApiKey);

app.get("/send/:email/:msg/:name", async (req, res) => {
  const { email, msg, name } = req.params;

  try {
    const { data, error } = await resend.emails.send({
      from: "Rojo's Ltd <onboarding@resend.dev>",
      to: ["otienoryan812@gmail.com"],
      subject: "Applicant",
      html: `
      <h1 style='text-align:center;color:rebeccapurple;'>New Job Applicant</h1>
      <h3>Message</h3>
      <p>${msg}</p>
      <a href="mailto:${email}">Sender Email</a>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
