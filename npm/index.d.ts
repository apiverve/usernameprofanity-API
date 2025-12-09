declare module '@apiverve/usernameprofanity' {
  export interface usernameprofanityOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface usernameprofanityResponse {
    status: string;
    error: string | null;
    data: UsernameProfanityData;
    code?: number;
  }


  interface UsernameProfanityData {
      username:  string;
      isProfane: boolean;
  }

  export default class usernameprofanityWrapper {
    constructor(options: usernameprofanityOptions);

    execute(callback: (error: any, data: usernameprofanityResponse | null) => void): Promise<usernameprofanityResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: usernameprofanityResponse | null) => void): Promise<usernameprofanityResponse>;
    execute(query?: Record<string, any>): Promise<usernameprofanityResponse>;
  }
}
