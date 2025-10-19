module.exports = {
  apps: [
    {
      name: 'aviana-website',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 89
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 89
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 89
      },
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      merge_logs: true,
      time: true
    }
  ]
};