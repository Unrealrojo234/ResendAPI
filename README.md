# Resend API using express js

<p>Resend provides an api that enable seamless eamil integration on applications</p>

# Running it locally

## Prerequisities

<ul>
  <li>Have nodejs installed</li>
  <li>Create a resend account on their <a href="https://resend.com/">website</a></li>
</ul>
<p>Clone this repo using git: </p>

```bash
git clone "https://github.com/Unrealrojo234/ResendAPI"
```
<p>Install the dependencies using npm</p>

```bash
npm install
```

<p>Make an .env file to hold your environment variabless.</p>

```.env
API_KEY="<Your api key generated from resend>"
RECEPIENT_EMAIL="email address to receive the mail"
```

<p>Generate an api key from intasend and assign it to the <em>API_KEY</em> variable.</p>
<p>Don't forget to add an email address to the <em>RECIPIENT_EMAIL</em> variable</p>

<h3>Starting the server:</h3>

```bash
npm run dev
```

<p>The server will be running on port 3000</p>
<p>Open your browser and search for <em>http://localhost:3000/</em>, this is your root domain and to send an email, you will have to add params to this domain.</p>

<h5>Example</h5>
<p><strong>http://localhost:3000/send/your_email/message/your_name</strong> since this is the format that our params follow</p>

<p>Code snippet.</p>

```javascript
app.get("/send/:email/:msg/:name", async (req, res) => {
  const { email, msg, name } = req.params;
}
```

<p>Happy coding!</p>
