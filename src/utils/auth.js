import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }

  async login({ email, password }) {
    return await this.account.createEmailPasswordSession({ email, password });
  }

  async getCurrentUser() {
    return await this.account.get();
  }

  async logOutUser() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

const authService = new AuthService();

export default authService;
