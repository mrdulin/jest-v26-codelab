export async function exec() {
  try {
    process.exit(0);
  } catch (e: unknown) {
    process.exit(1);
  }
}

(async () => {
  await exec();
})();
