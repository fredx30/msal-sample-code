const msRestAzure = require('ms-rest-azure');
const DNSManagement = require('azure-arm-dns');

const subscriptionId = 'DAN9Y2NW2';

msRestAzure
    .interactiveLogin()
    .then(credentials => {
        const client = new DNSManagement(credentials, subscriptionId);
        return client.zones.list();
    })
    .then(zones => console.dir(zones, { depth: null, colors: true }))
    .catch(err => console.log(err));
