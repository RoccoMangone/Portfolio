// Converts "#033cf5" into { r: 255, g: 0, b: 0 }
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.substring(0, 2), 16),
    g: parseInt(clean.substring(2, 4), 16),
    b: parseInt(clean.substring(4, 6), 16),
  };
}

// Converts { r, g, b } back into "#033cf5"
function rgbToHex({ r, g, b }) {
  const toHex = (n) => Math.round(n).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function averageHexColors(hexCodes) {
  if (hexCodes.length === 0) return "#cccccc"; // default gray if no submissions yet

  const totals = hexCodes.reduce(
    (acc, hex) => {
      const { r, g, b } = hexToRgb(hex);
      return { r: acc.r + r, g: acc.g + g, b: acc.b + b };
    },
    { r: 0, g: 0, b: 0 }
  );

  const count = hexCodes.length;
  return rgbToHex({
    r: totals.r / count,
    g: totals.g / count,
    b: totals.b / count,
  });
}