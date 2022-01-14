export function register(server) {
  server.method('methodNameA', async () => {
    return 'something';
  });
}
