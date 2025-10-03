# Public Assets Folder

This folder contains static assets that are publicly accessible.

## Usage

Files in this folder can be referenced from the root path `/` in your application.

### Example:

If you place a logo file here:
- `public/logo.png`

You can reference it in your code as:
- `/logo.png`

```tsx
// In your React components:
<img src="/logo.png" alt="Logo" />

// Or with Next.js Image component:
import Image from 'next/image'
<Image src="/logo.png" alt="Logo" width={200} height={50} />
```

## Recommended Structure

```
public/
├── logo.png          # Main logo
├── logo-dark.png     # Dark mode logo (if needed)
├── favicon.ico       # Browser favicon
└── images/           # Additional images
    └── ...
```

## Notes

- Files here are served statically and are NOT processed by webpack
- Always use absolute paths starting with `/`
- Optimize images before placing them here for better performance
