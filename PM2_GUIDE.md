# PM2 Deployment Guide - Aviana Website

## Prerequisites
1. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```

2. Build the Next.js application:
   ```bash
   npm run build
   ```

## PM2 Commands

### Start the application
```bash
pm2 start ecosystem.config.js
```

### Stop the application
```bash
pm2 stop aviana-website
```

### Restart the application
```bash
pm2 restart aviana-website
```

### Delete the application from PM2
```bash
pm2 delete aviana-website
```

### View logs
```bash
pm2 logs aviana-website
```

### View real-time logs
```bash
pm2 logs aviana-website --lines 50
```

### Monitor application
```bash
pm2 monit
```

### Show application status
```bash
pm2 status
```

### Save PM2 configuration
```bash
pm2 save
```

### Setup PM2 to start on system boot
```bash
pm2 startup
pm2 save
```

## Configuration Details

- **Application Name**: aviana-website
- **Port**: 89
- **Environment**: Production
- **Instances**: 1 (can be scaled up)
- **Auto Restart**: Enabled
- **Memory Limit**: 1GB
- **Logs Location**: ./logs/

## Production Deployment Steps

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the application: `npm run build`
4. Install PM2: `npm install -g pm2`
5. Start with PM2: `pm2 start ecosystem.config.js`
6. Save configuration: `pm2 save`
7. Setup startup: `pm2 startup`

## Monitoring

Access the website at: `http://localhost:89`

Monitor with PM2: `pm2 monit`