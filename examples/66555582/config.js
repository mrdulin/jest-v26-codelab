const { hostname } = window.location;

console.log('config loaded');

let USE_DEV_TOOLS = false;
if (hostname === 'qa.example.com' || hostname === 'dev.example.com' || process.env.NODE_ENV !== 'production') {
  USE_DEV_TOOLS = true;
}

export default { USE_DEV_TOOLS };
