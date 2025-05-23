const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://gloww.vercel.app/";

export const dynamicBlurUrl = async (url) => {
  const base64str = await fetch(
    `${baseUrl}/_next/image?url=${url}&w=16&q=100`,
    {
      cache: "no-cache",
    }
  ).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64")
  );

  const blurSvg = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'>
  <filter id='b' color-interpolation-filters='sRGB'><feGaussianBlur stdDeviation='20'/>
  <feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/><feFlood x='0' y='0' width='100%' height='100%'/><feComposite operator='out' in='s'/><feComposite in2='SourceGraphic'/>
  <feGaussianBlur stdDeviation='20'/></filter>
  <image width='100%' height='100%' x='0' y='0' preserveAspectRatio='none' style='filter: url(#b);' 
  href='data:image/avif;base64,${base64str}'/>
  </svg>
  `;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
};
