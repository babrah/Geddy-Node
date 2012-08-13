
// Add uncaught-exception handler in prod-like environments
if (geddy.config.environment != 'production') {
  process.addListener('uncaughtException', function (err) {
    geddy.log.error(JSON.stringify(err));
  });
}

