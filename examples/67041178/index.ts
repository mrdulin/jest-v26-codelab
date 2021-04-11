declare global {
  interface Window {
    app: {
      initialAppProps: {
        exp: {
          my_feature: boolean;
        };
      };
    };
  }
}

const expEnabled = typeof window !== 'undefined' && !!window.app.initialAppProps.exp.my_feature;
export const feature = [expEnabled ? 'exp is enabled' : 'exp is disable'];
