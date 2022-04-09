import { proxyServer } from "tcp-local-tunnel";

proxyServer({
  proxyPort: 80, // remote port to access exposed local machine
  tunnelPort: 8010, // tunnel port
});
