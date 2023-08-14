'use client';

export default function PostError({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}
