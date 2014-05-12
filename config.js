'use strict';
// NOTE: grunt automatically serves pages from localhost:9003 which WILL NOT WORK (for some things)
//
// YOU MUST point your browser to local.ldsconnect.org:9003 or YOU WILL HATE YOUR LIFE
// and spend hours debugging a problem that doesn't exist
// (I've cumulatively wasted nearly a full day of my life on such imagined problems)
//
module.exports = {
  protocol: 'http'
, hostname: 'local.ldsconnect.org'
, port: 4005
, get host() {
    if (
        'http' === this.protocol && '80' === this.port.toString()
      ||'https' === this.protocol && '443' === this.port.toString()
    ) {
      return this.hostname;
    }

    return this.hostname + ':' + this.port;
  }
, get href() {
    return this.protocol + '://' + this.host;
  }
};
