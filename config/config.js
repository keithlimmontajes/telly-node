require("dotenv").config();

const private_key =
  "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCy12UXtcLOPROd\nHHz82zfOy6DW4y6mZi6k6hfloxb56NiV1g/u+AH/pgo+dHxQTVCmm+fmi/3OmF+M\n51mcnm02rVdYGX+znjLn/z7XGkb09ydVArU6lra88v+jK6asmBgTKT+BZM92VS+7\nlu7EXHovMJuE5m+GAVaTxIyghJ56H4h84XwHg+EvwX57E9iBLhq+utKVCxXYJygP\nm9YrrTttw6nhUWOU/SpPcT7vFE4nM8YqNiSs7Pi1H+cv2QgIoLwVErZ4G3NMWfNc\nBEbe4QtNEya9ZN9Lr7NDVU6aVEr1EFUq4V6OpEpsQiSBpZ9spSOOUD5nm3BIkPEu\n/tDsgGGpAgMBAAECggEACNLizIAty+IskRBiRFGGl9/pICEWYKRjAcUBB9X7oLnx\n0ba9k4NOCfCFyd4Sch3WcFn536Chlatj735MqBMS/WMhD5o2eETCazrnPVKxFI4L\nNUEMcwcTng/5N/JD53kbmvpqhTZVnBeI4t8ICc0sRB7IVY7PCtQPEvxcGeFhNlI5\nuODBBP6lGRTuq4pFCmNdsNdyUhqtyYIfk2iIMCUw/4zkY6zbMe4C0zwZdrntDltu\n3FNmRGuYepE6pQx5ile0U7GuTwkT/eqiXXaHdKuE4GHmYWM4omHwV3EH4mIlpYJv\nOgXaDEPSxujGu9k5HWhLnGft0+nFsoTtr8kk892svwKBgQDvY7TQhCwDJn6i4aKS\nPLUc8Aab7yh5vVF0m75zlXgX7N2clXHdwwzR0sNf8tAj1y16FELewQe56UniTJtX\ngj/gClRKMZdu78PXb0PLbmpGVYLqjCjfG7Ya0WB0BEY5CAp7bfglxub+PP2qREGO\naXZlA9lyeduRjgVVkMK1UOeORwKBgQC/QCsOGd/MAbzNEtsy+g8iIW1NhkGfsTo9\n4YIh+BKb0xZFnxAGfXyJogOtR5s7MXcjc0/lYvCxir2oPEJuyaeLxTseCYX0Xphh\n+82DJIpwlBAdh8KrTsRLqJg8w+SAtqpZe+fAZCb84FRhLBhr2dzC1vrV6rGIA190\nImKGzgTYjwKBgCq9nYnhH06Mr+165aDAcAGzpSpwH8TklUeBixZt6Fw1MTgEwqi6\na26G99UIsDrF71uthGbrBeseiM97p/yOx8LDdVst0YDAFDJBrlQC6byXBeHEloOH\nGhNdsJ/mJ3eFRQHWl4h/I7zevNeKij3X/Ih6kHdM5HPvbGpjhzACOuV/AoGAYpU7\nHFuuBsTmg3cy0oYfguJkK1AHR7/dW8SAhe4P+Y7Hrj+dzRqmNXP0HUAJ/mszFGz+\nRCnKFFqGBNB7FgyQdvXF0WfrStnwBqH7f5w4WGuaGv6+E/vYJ3/SaZA4mziNeu7p\nuTxm9HbWR/io5f85Up3qUpZVyNykOYL38rEDwnUCgYAn2g99MoJ/cZ2GyA6cTEns\n1K6rnUZi/yVpqydulRkxwM1/J6ezRuQ7R97o0AwmyBqn+MUnq92AN5FxmhU65Omm\nNTzIMwB8hlf8apV86+r5btrrMoSCYDsyZMMJsNmG4eB4lQuDctSx4ihYNF7PuCb8\nu+Lc19vutxCzxqIuIDXddQ==\n-----END PRIVATE KEY-----\n";

const serviceAccount = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: private_key,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT,
  client_x509_cert_url: process.env.CLIENT_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
};

module.exports = serviceAccount;
