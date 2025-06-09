#!/bin/bash

# Script to download Input Sans Narrow font for free private use
# Input fonts are available for free for private use from input.djr.com

echo "🔤 Setting up Input Sans Narrow font..."

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download the Input font files
# Note: This downloads the basic four-style family (Regular, Italic, Bold, Bold Italic)
# You may need to customize the download from https://input.djr.com/download/

echo "📥 Please visit https://input.djr.com/download/ to download Input Sans Narrow"
echo "🎯 Select the following options:"
echo "   - Download a custom four-style family"
echo "   - Select: Regular, Bold (and optionally Medium, Light)"
echo "   - Select Input Sans Narrow for the style"
echo "   - Download the zip file"
echo ""
echo "📁 Extract the downloaded files and copy the following to public/fonts/:"
echo "   - InputSansNarrow-Light.woff2 (if available)"
echo "   - InputSansNarrow-Regular.woff2"
echo "   - InputSansNarrow-Medium.woff2 (if available)"
echo "   - InputSansNarrow-Bold.woff2"
echo ""
echo "💡 Alternative: You can also download all 168 styles if you want more variety"
echo ""
echo "⚖️  Note: Input fonts are free for private use. For commercial use, purchase a license."
echo ""

# Check if curl is available for potential automated download
if command -v curl &> /dev/null; then
    echo "🚀 If Input provides direct download URLs in the future, this script can be updated"
    echo "   to automatically download the font files."
fi

echo "✅ Font setup configuration is ready!"
echo "   Once you place the font files in public/fonts/, Input Sans Narrow will be available." 