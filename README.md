# Vamshi Portfolio

## Contact form email setup

The contact form sends messages through the Node server using SMTP. SMTP
credentials stay on the server and are never included in the browser bundle.

1. Copy `.env.example` to `.env`.
2. Set `SMTP_USER` to your sending email account and `SMTP_PASS` to its SMTP
   password. For Gmail, create an App Password and use that instead of your
   regular password.
3. Set `CONTACT_FROM` to an address allowed by your SMTP provider and
   `CONTACT_TO` to the inbox that should receive contact messages.
4. Run `npm run dev` to start the Vite site and the API together.

For production, run `npm run build` and deploy the project as a Node app with
`npm start`. Configure the same environment variables in the hosting
provider's secret settings. The server serves the built site and the contact
API on the same port. Do not commit `.env`.

The API validates submissions, limits each IP to five messages per 15 minutes,
and includes a honeypot field to discourage automated spam.

### Netlify deployment

This project includes a Netlify Function for the contact endpoint. Import the
GitHub repository in Netlify; `netlify.toml` configures the build, static
publish directory, function, and `/api/contact` route. In the Netlify site
environment variables, add `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`,
`SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`, and `CONTACT_FROM`. These must be
configured for Functions and redeployed after changes. Never upload or commit
the local `.env` file.

## Vite template notes

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
