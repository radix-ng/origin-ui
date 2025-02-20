# Origin UI Angular

> [!NOTE]
> This is a fork of the original React implementation [Origin UI](https://originui.com/) project. This project is not affiliated with the original.

> [!NOTE]
> This is a work in progress. For some components the necessary libraries are coming soon (e.g. [Radix NG](https://www.radix-ng.com/primitives/overview/introduction)).

- Built with Angular and TailwindCSS
- RadixNG and Angular CDK
- Zoneless enable!

**Demo** → [originui-ng.com/](https://originui-ng.com/)

## Usage

### Prerequisites

- [TailwindCSS v3](https://v3.tailwindcss.com/)
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

### CSS Variables
Import the CSS in your `style.css` file (the following is based on tailwindcss):

```css
@layer base {
    :root {
        --background: 0 0% 100%;
        --foreground: 240 10% 3.9%;
        --card: 0 0% 100%;
        --card-foreground: 240 10% 3.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 240 10% 3.9%;
        --primary: 240 5.9% 10%;
        --primary-foreground: 0 0% 98%;
        --secondary: 240 4.8% 95.9%;
        --secondary-foreground: 240 5.9% 10%;
        --muted: 240 4.8% 95.9%;
        --muted-foreground: 240 3.8% 46.1%;
        --accent: 240 4.8% 95.9%;
        --accent-foreground: 240 5.9% 10%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 100%;
        --border: 240 5.9% 90%;
        --input: 240 4.9% 83.9%;
        --ring: 240 5% 64.9%;
        --radius: 0.5rem;
    }
    .dark {
        --background: 240 10% 3.9%;
        --foreground: 0 0% 98%;
        --card: 240 10% 3.9%;
        --card-foreground: 0 0% 98%;
        --popover: 240 10% 3.9%;
        --popover-foreground: 0 0% 98%;
        --primary: 0 0% 98%;
        --primary-foreground: 240 5.9% 10%;
        --secondary: 240 3.7% 15.9%;
        --secondary-foreground: 0 0% 98%;
        --muted: 240 5.9% 10%;
        --muted-foreground: 240 4.4% 58%;
        --accent: 240 5.9% 10%;
        --accent-foreground: 0 0% 98%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 100%;
        --border: 240 3.7% 15.9%;
        --input: 240 3.7% 15.9%;
        --ring: 240 3.8% 46.1%;
    }
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
