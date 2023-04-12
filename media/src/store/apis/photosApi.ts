import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Album } from '../../types/album';
import { faker } from '@faker-js/faker';
import { Photo } from '../../types/photo';

function createTag(type: 'Photo' | 'AlbumPhotos', id?: number) {
  return {
    type,
    id,
  };
}

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  tagTypes: ['Photo', 'AlbumPhotos'],
  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query<Photo[], Album>({
        providesTags: (result = [], error, album) => {
          const tags = result?.map((photo) => createTag('Photo', photo.id));
          tags.push(createTag('AlbumPhotos', album.id));
          return tags;
        },
        query: (album: Album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id,
            },
            method: 'GET',
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => [
          createTag('AlbumPhotos', album.id),
        ],
        query: (album: Album) => {
          return {
            url: '/photos',
            method: 'POST',
            body: {
              url: faker.image.abstract(150, 150, true),
              albumId: album.id,
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => [
          createTag('Photo', photo.id),
        ],
        query: (photo: Photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {
  useAddPhotoMutation,
  useFetchPhotosQuery,
  useRemovePhotoMutation,
} = photosApi;
export { photosApi };
