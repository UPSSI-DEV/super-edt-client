type Provider = {
  name: string;
  url: string;
  icon: string;
  original: object;
};

export type { Provider };

export async function useAuthProviders(redirectUrl: string) {
  const list = await usePocketbase().users.listAuthMethods();

  const providers: Provider[] = list.authProviders
    .map((p) => ({
      name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
      url: p.authUrl + redirectUrl,
      icon: `/images/providers/${p.name}.png`,
      original: p,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return providers;
}
