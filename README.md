# Personal Portfolio Template with Content Collection (SEO Rich)

This is a simple static-generated site built using **Next.js** with content management through Markdown (.mdx) files. The site supports easy configuration through a dedicated config file and includes optional Google Analytics integration. It is designed to be **SEO rich** with optimized metadata, dynamic page titles, and improved visibility on search engines.

## 🚀 Features

- Static site generation using Next.js
- Content management with MDX files
- Configurable appearance and content
- Google Analytics support
- **SEO optimized** with customizable metadata

---

## 📦 Project Structure

```bash
.
├── content/           # MDX files for pages and posts
├── config/            # Site configuration file
├── app/             # Next.js pages
├── public/            # Static assets
├── .env.example       # Example environment variables
└── README.md          # This file
```

---

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure the site:**

   - Edit the contents of the `.mdx` files inside the `content/` folder.
   - Adjust the configuration using the `config/config.js` file for appearance and homepage content.

3. **Optional: Add Google Analytics**

   - Create a `.env` file by copying from `.env.example`:
     ```bash
     cp .env.example .env
     ```
   - Add your Google Analytics ID and App URL to `.env`:
     ```env
     NEXT_PUBLIC_GA_ID=YOUR_GA_TRACKING_ID
     NEXT_PUBLIC_APP_URL=YOUR_APP_URL # Defaults to http://localhost:3000
     ```

4. **Build the site:**

   ```bash
   npm run build
   ```

5. **Start the site:**
   ```bash
   npm run start
   ```

---

## 🧑‍💻 Customization

### 1. **Updating Content**

- All content is stored in the `/content` folder as `.mdx` files.
- Edit existing files or add new ones for additional pages.

### 2. **Site Configuration**

- Customize the homepage and site settings via `config/config.js`.
- Options include:
  - Site Title
  - Navigation Links
  - Theme Preferences
  - **SEO Metadata** like title, description, and keywords

---

## ⚙️ Environment Variables

- **NEXT_PUBLIC_GA_ID**: _(Optional)_ Add your Google Analytics Tracking ID.
- **NEXT_PUBLIC_APP_URL**: _(Optional)_ Define your site URL. Defaults to `http://localhost:3000` if not specified.

Example `.env` file:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

---

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this template.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rush-Studio/augustui-portfolio-template.git)

Enjoy building your SEO-rich personal portfolio! 🚀
