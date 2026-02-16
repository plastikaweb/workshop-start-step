import client from '#lib/client.ts';
import type { Post } from './post-collection.model.ts';

export const getAllPosts = async () =>
  await client.getContentList<Post>({
    contentType: 'Post',
    sort: { 'fields.date': 'desc' },
    pagination: { take: 6 },
  });
