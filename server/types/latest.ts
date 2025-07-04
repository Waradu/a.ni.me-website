export interface Latest {
  version: string;
  notes: string;
  pub_date: string;
  platforms: Record<string, Platform>;
  prerelease: boolean;
}

export interface Platform {
  signature: string;
  url: string;
}
