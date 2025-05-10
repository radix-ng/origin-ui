# Origin UI Angular

[![Discord Chat](https://img.shields.io/discord/1231525968586346567.svg?color=5865F2&logo=discord&logoColor=FFFFFF)](https://discord.gg/NaJb2XRWX9)

> [!NOTE]
> This is a fork of the original React implementation [Origin UI](https://originui.com/) project. This project is not affiliated with the original.

> [!NOTE]
> This is a work in progress. For some components the necessary libraries are coming soon (e.g. [Radix NG](https://www.radix-ng.com/primitives/overview/introduction)).

- Built with Angular and TailwindCSS v4
- RadixNG and Angular CDK
- Zoneless enable!

**Demo** → [originui-ng.com/](https://originui-ng.com/)

## Usage

### Prerequisites

- [TailwindCSS v4](https://tailwindcss.com/)
- [Radix Angular](https://radix-ng.com)
- [Angular CDK](https://material.angular.io/cdk/categories)
- [Lucide Angular](https://lucide.dev/guide/packages/lucide-angular)

```bash
  npm install @radix-ng/primitives @angular/cdk
```

### OriginUI Components

```bash
  npm install @origin-ui/components
```

### Tailwind v4 CSS Variables
Import the CSS in your `style.css` file (the following is based on tailwindcss):

```css
:root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.141 0.005 285.823);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0.141 0.005 285.823);
    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.141 0.005 285.823);
    --primary: oklch(0.21 0.006 285.885);
    --primary-foreground: oklch(0.985 0 0);
    --secondary: oklch(0.967 0.001 286.375);
    --secondary-foreground: oklch(0.21 0.006 285.885);
    --muted: oklch(0.967 0.001 286.375);
    --muted-foreground: oklch(0.55 0.01 286);
    --accent: oklch(0.967 0.001 286.375);
    --accent-foreground: oklch(0.21 0.006 285.885);
    --destructive: oklch(0.637 0.237 25.331);
    --destructive-foreground: oklch(0.637 0.237 25.331);
    --border: oklch(0.92 0 286);
    --input: oklch(0.871 0.006 286.286);
    --ring: oklch(0.871 0.006 286.286);
    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);
    --radius: 0.625rem;
    --sidebar: oklch(0.985 0 0);
    --sidebar-foreground: oklch(0.141 0.005 285.823);
    --sidebar-primary: oklch(0.21 0.006 285.885);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.967 0.001 286.375);
    --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
    --sidebar-border: oklch(0.92 0.004 286.32);
    --sidebar-ring: oklch(0.871 0.006 286.286);
}

.dark {
    --background: oklch(0.141 0.005 285.823);
    --foreground: oklch(0.985 0 0);
    --card: oklch(0.141 0.005 285.823);
    --card-foreground: oklch(0.985 0 0);
    --popover: oklch(0.141 0.005 285.823);
    --popover-foreground: oklch(0.985 0 0);
    --primary: oklch(0.985 0 0);
    --primary-foreground: oklch(0.21 0.006 285.885);
    --secondary: oklch(0.274 0.006 286.033);
    --secondary-foreground: oklch(0.985 0 0);
    --muted: oklch(0.21 0.006 285.885);
    --muted-foreground: oklch(0.65 0.01 286);
    --accent: oklch(0.21 0.006 285.885);
    --accent-foreground: oklch(0.985 0 0);
    --destructive: oklch(0.396 0.141 25.723);
    --destructive-foreground: oklch(0.637 0.237 25.331);
    --border: oklch(0.274 0.006 286.033);
    --input: oklch(0.274 0.006 286.033);
    --ring: oklch(0.442 0.017 285.786);
    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);
    --sidebar: oklch(0.205 0 0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border: oklch(0.274 0.006 286.033);
    --sidebar-ring: oklch(0.442 0.017 285.786);
}
```

### Angular CDK styles
Import in your `style.css` file:

```css
@import '@angular/cdk/overlay-prebuilt.css';
@import '@angular/cdk/a11y-prebuilt.css';
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Terms of Use

Feel free to use these components in personal and commercial projects. However, while the tutorials and demos are available for your use as-is, they cannot be redistributed or resold.

## Contact

For any questions or feedback, please open an issue on this repository.
[Join our Discord](https://discord.gg/NaJb2XRWX9)
