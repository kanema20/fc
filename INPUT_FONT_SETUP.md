# Input Sans Narrow Font Setup

This project is configured to use **Input Sans Narrow** as the primary font. Input is a beautiful monospace and sans-serif font family designed specifically for code and digital interfaces.

## 🎯 Current Status

✅ **Tailwind CSS Configuration**: Input Sans Narrow is already configured as the primary font  
✅ **CSS @font-face Rules**: Font declarations are set up in `src/styles/globals.css`  
❌ **Font Files**: Need to download the actual font files

## 📥 How to Set Up the Font

### Step 1: Download Input Sans Narrow

1. Visit [https://input.djr.com/download/](https://input.djr.com/download/)
2. **Select "Download a custom four-style family"**
3. Configure your download:
   - **Regular**: `Input Sans Narrow Regular`
   - **Italic**: `Input Sans Narrow Italic` (optional)
   - **Bold**: `Input Sans Narrow Bold`
   - **Bold Italic**: `Input Sans Narrow Bold Italic` (optional)
4. **Select character defaults** (use defaults or customize)
5. **Agree to Input's license** (✅ Required)
6. Click **"Download Input for private use"**

### Step 2: Extract and Place Font Files

1. Extract the downloaded ZIP file
2. Copy the following font files to `public/fonts/`:
   ```
   public/fonts/
   ├── InputSansNarrow-Light.woff2
   ├── InputSansNarrow-Regular.woff2
   ├── InputSansNarrow-Medium.woff2
   └── InputSansNarrow-Bold.woff2
   ```

### Step 3: Verify Setup

1. Start your development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

2. Open your browser to [http://localhost:3000](http://localhost:3000)
3. The AlphaFC landing page should now display with Input Sans Narrow font

## 🔧 Technical Details

### Font Configuration

The font is configured in two places:

1. **Tailwind Config** (`tailwind.config.ts`):

   ```typescript
   fontFamily: {
     primary: ['Input Sans Narrow', 'Inter', ...defaultTheme.fontFamily.sans],
   }
   ```

2. **CSS Font Faces** (`src/styles/globals.css`):
   ```css
   @font-face {
     font-family: 'Input Sans Narrow';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url('/fonts/InputSansNarrow-Regular.woff2') format('woff2');
   }
   ```

### Font Weights Available

- **300**: Light
- **400**: Regular
- **500**: Medium
- **600**: Medium (fallback)
- **700**: Bold

### Usage in Components

The font is applied automatically through Tailwind's `font-primary` class:

```jsx
<h1 className='font-primary text-4xl font-bold'>Your heading text</h1>
```

## 📝 License Information

- **Free for private use**: ✅ Personal projects, internal tools
- **Commercial license required**: For client work, published websites, apps
- **License details**: [https://input.djr.com/info/](https://input.djr.com/info/)

## 🔄 Alternative: Quick Script Setup

Run the provided script for guided setup:

```bash
./download-input-font.sh
```

This script will guide you through the download process and show you exactly where to place the files.

## 🚨 Troubleshooting

### Font Not Loading?

1. **Check file paths**: Ensure font files are in `public/fonts/`
2. **Check file names**: Must match exactly what's in CSS
3. **Check browser dev tools**: Look for 404 errors in Network tab
4. **Clear browser cache**: Hard refresh with `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Font Looks Different?

1. **Verify font files**: Make sure you downloaded "Input Sans Narrow" not "Input Sans"
2. **Check font weights**: Ensure you have the weights you're using (400, 700, etc.)

## 🎨 Font Preview

Once set up, you'll see Input Sans Narrow throughout the AlphaFC interface:

- Clean, narrow letterforms perfect for modern UI
- Excellent readability at all sizes
- Professional appearance suitable for sports/tech branding
- Optimized spacing for digital interfaces

---

**Need help?** Check the [Input font documentation](https://input.djr.com/info/) or create an issue in this repository.
