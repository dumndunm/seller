'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Posts = () => {
  const router = useRouter()

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      router.push('/reports?abc=333')
    }, 5000);
  }, [router]);

  return <div>{JSON.stringify(posts, null, 4)}</div>;
};
