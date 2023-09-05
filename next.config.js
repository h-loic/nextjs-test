/** @type {import('next').NextConfig} */
/*const nextConfig = {
output:'export',}
module.exports = nextConfig
*/

module.exports = {
    webpack: (config, { isServer }) => {
      // Ajoutez cette règle pour gérer les fichiers .xlsx
      config.module.rules.push({
        test: /\.xlsx$/,
        use: ['raw-loader'], // Utilisez le raw-loader pour charger les fichiers xlsx
      });
  
      if (!isServer) {
        // Configuration spécifique côté client
      }
  
      return config;
    },
  };