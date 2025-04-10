# NuxtJS Portfolio Application

A modern, reusable portfolio application built with NuxtJS 3, featuring a clean and professional design. This application is designed to be easily customizable and can be used as a template for personal or professional portfolios.

## Features

- Modern and responsive design
- Dynamic content management through TypeScript data files
- Reusable components for easy customization
- Built with NuxtJS 3 for optimal performance
- TypeScript support for better development experience
- Modular architecture for easy maintenance and updates

## Project Structure

```
application/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Vue components
│   ├── card/       # Card components for displaying content
│   ├── forms/      # Form components
│   ├── modal/      # Modal components
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── TopSection.vue
│   ├── ServicesSection.vue
│   ├── ProjectsSection.vue
│   └── ExperiencesSection.vue
├── data/           # Data files
│   └── portfolio.ts # Portfolio content and configuration
├── layouts/        # Layout components
├── pages/          # Application pages
├── public/         # Public static files
├── server/         # Server-side code
├── types/          # TypeScript type definitions
└── app.vue         # Root component
```

## Data Structure

The application uses a centralized data management approach through the `portfolio.ts` file. This file contains all the content and configuration for the portfolio, including:

- Personal information
- Projects
- Experiences
- Services
- Skills
- Contact information

This structure makes it easy to update content without modifying the components themselves.

## Component Structure

The application follows a modular component structure:

1. **Layout Components**

   - `AppHeader.vue`: Navigation and header section
   - `AppFooter.vue`: Footer section

2. **Section Components**

   - `TopSection.vue`: Hero/Introduction section
   - `ServicesSection.vue`: Services/Expertise section
   - `ProjectsSection.vue`: Projects showcase
   - `ExperiencesSection.vue`: Work experience timeline

3. **Reusable Components**
   - `card/`: Card components for displaying content
   - `forms/`: Form components for contact and other interactions
   - `modal/`: Modal components for detailed views

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Customization

To customize the portfolio:

1. Update the content in `data/portfolio.ts`
2. Modify the styles in the respective component files
3. Add or remove sections by updating the main layout
4. Customize the theme by modifying the CSS variables

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

## Deployment

The application can be deployed to any static hosting service or server that supports Node.js applications. Popular options include:

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify

## Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## License

This project is open-source and available under the MIT License.
