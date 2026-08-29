module.exports = {
  apps: [
    {
      name: 'project-nestjs',
      script: 'dist/main.js',
      cwd: '/var/www/html/project-nestjs',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
      },
    },
  ],
};