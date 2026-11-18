/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Backward compatibility: the resume used to be served at /Resume.pdf.
      {
        source: "/Resume.pdf",
        destination: "/Khalid_Tahir_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
