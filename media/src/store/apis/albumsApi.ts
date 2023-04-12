import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../types/user';
import { Album } from '../../types/album';
import { faker } from '@faker-js/faker';

// DEV ONLY !!!
const pause = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      await pause(500);
      return fetch(...args);
    },
  }),
  tagTypes: ['Album', 'UserAlbums'],
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => [
          createTag('Album', album.id),
        ],
        query: (album: Album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => [
          createTag('UserAlbums', user.id),
        ],
        query: (user: User) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query<Album[], User>({
        providesTags: (result = [], error, user) => {
          const tags = result.map((album) => createTag('Album', album.id));
          tags.push(createTag('UserAlbums', user.id));
          return tags;
        },
        query: (user: User) => {
          return {
            url: '/albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

function createTag(type: 'Album' | 'UserAlbums', id?: number) {
  return {
    type,
    id,
  };
}

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
