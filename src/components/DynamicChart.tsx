import dynamic from "next/dynamic";

// Wrap the BrandChart component with dynamic import
export default dynamic(() => import("./Chart"), {
  ssr: false, // Ensure that this component is not server-side rendered
});
