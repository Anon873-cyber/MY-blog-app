import { Client, ID, Databases, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost(post) {
    try {
      return await this.databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
        ID.unique(), // document ID
        {
          title: post.title,
          description: post.description,
          imageUrl: post.imageUrl,
        },
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  getAppwriteFileId(url) {
  const match = url.match(/\/files\/([^/?]+)/);
  return match ? match[1] : null;
}

  async updatePost(postid, data) {
    try {
      return await this.databases.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
        postid,
        data,
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
        slug,
      );

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
        slug,
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async getPosts(queries = []) {
    try {
      return await this.databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
        queries,
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  // File upload

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
        fileId,
      );

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFileView(
      process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
      fileId,
    );
  }
}

const service = new Service();

export default service;
