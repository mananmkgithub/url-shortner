# 🔗 URL Shortener API

A lightweight and functional **URL Shortener** built using **Node.js**, **Express**, and **MongoDB**, with auto-generated short URLs and visit tracking.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **ID Generator**: [shortid](https://www.npmjs.com/package/shortid)

---

Urlshortner(api)/
│
├── controller/           # Handles all controller logic
│   └── urlcontroller.js
│
├── models/               # Mongoose schema for URL data
│   └── urlschema.js
│
├── routes/               # Express routes
│   └── urlroutes.js
│
├── node_modules/         # Installed npm dependencies
│
├── .env                  # Environment variables (DB URI, PORT)
├── .gitignore            # Files to ignore in git
├── app.js                # Main server file
├── package.json          # Project metadata and scripts
├── package-lock.json     # Exact dependency tree
└── README.md             # Project documentation

| Method | Route         | Description                                                           |
| ------ | ------------- | --------------------------------------------------------------------- |
| GET    | `/api`           | Fetches **all shortened URLs** from the database.                     |
| POST   | `/api/Add`        | Creates a **new shortened URL**. Requires a JSON body with `fullurl`. |
| GET    | `/api//:id`        | Retrieves the **original full URL** for the given short ID.           |
| DELETE | `/api/delete/:id` | Deletes a URL record by its short ID.                                 |
| GET    | `/api/click/:id`  | **Redirects** to the full URL and records a **click with counts**. |


---

## ⚙️ Installation

1. **Clone the repo**
```bash
git clone https://github.com/mananmkgithub/url-shortner.git
cd url-shortener


2. **Install dependencies**
npm install

3. **Add environment variables **
MONGODB_URI=your_mongodb_connection_string
PORT=5000

4.**Start the server**
npm start


