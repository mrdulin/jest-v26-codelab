interface NodeRequire {
  resolveWeak: (path: string) => Boolean;
}

declare module '*.gql';