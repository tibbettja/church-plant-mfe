"use client";

import BaseLayout from "@/@core/layouts/BaseLayout";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import ThemeComponent from "@/@core/theme/ThemeComponent";

import fonts from "@/@core/theme/fonts";

const initialThemeSettings = {
  themeColor: "primary",
  mode: "light",
  contentWidth: 800,
};

const ServerApp = ({ children }) => {
  return (
    <html lang="en">
      <body className={fonts.body.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeComponent settings={initialThemeSettings}>
            <BaseLayout>{children}</BaseLayout>
          </ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default ServerApp;
