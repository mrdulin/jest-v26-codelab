export default {
  async query<T>(sql: string): Promise<{ rows: T[] }> {
    return {
      rows: [],
    };
  },
};
