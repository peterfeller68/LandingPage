# Orchium Landing Page

A small ASP.NET Core project for editing and previewing the Orchium static landing page in Visual Studio. Azure Static Web Apps serves the files in `Orchium.LandingPage/wwwroot` directly.

## Open and run in Visual Studio

1. Open `Orchium.LandingPage.sln`.
2. Set `Orchium.LandingPage` as the startup project if Visual Studio does not select it automatically.
3. Run the project. It serves the page at `http://localhost:5080`.

The ASP.NET Core host is only used for local development. Azure deploys the static files from `wwwroot`.

## Add or edit products

Edit `Orchium.LandingPage/wwwroot/products.js`. Each item supplies a product name, short description, category, destination URL, and card appearance. Replace the sample `product1.orchium.io` and `product2.orchium.io` addresses with the actual product subdomains. Add or remove items in the `products` array to change the cards.

## Deploy to Azure Static Web Apps

1. Create an Azure Static Web App and select the GitHub repository `peterfeller68/LandingPage` with `main` as its production branch. If you already created the app without linking a repository, add a GitHub Actions deployment workflow instead.
2. In the Azure Static Web App's **Manage deployment token** settings, copy the deployment token.
3. In GitHub, open **Settings → Secrets and variables → Actions → New repository secret**. Name it `AZURE_STATIC_WEB_APPS_API_TOKEN` and paste the token as its value.
4. Push changes to `main`. The workflow in `.github/workflows/azure-static-web-apps.yml` deploys the `wwwroot` files. Pull requests to `main` receive a preview environment, which is closed when the pull request closes.

The landing page's custom domain and DNS records are configured on the Azure Static Web App. Product subdomains should point to their respective product hosting services.
