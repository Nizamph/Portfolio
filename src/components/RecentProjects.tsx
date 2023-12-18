import React, { useState } from 'react';
import Card from './UI/Card';
import GithubStat from './GithubStat';
import { useEffect } from 'react';
import { GET_REPO_DETAILS } from '@/constants/constants';
interface repoDetailsTypes {
  name: string | undefined;
  stargazers_url: string;
  description: string;
  languages_url: string;
  updated_at: string;
  // Add other properties as needed
}
const RecentProjects = () => {
  const [gitHubStats, setGitHubStats] = useState<repoDetailsTypes[]>([]);

  useEffect(() => {
    getGithubDetails();
  }, []);

  const getGithubDetails = async () => {
    const res = await fetch(GET_REPO_DETAILS);
    const data = await res.json();
    console.log('data is here', data);
    setGitHubStats(data);
  };
  return (
    <div className='w-full mt-2 h-[750px] flex flex-col gap-10'>
      <div className='w-full text-center text-6xl font-light text-black items-center justify-center'>
        Recent Projects
      </div>
      <div className='flex flex-wrap items-start justify-center gap-5'>
        {gitHubStats?.map((itm) => (
          <>
            <GithubStat
              repoName={itm?.name}
              star={itm?.stargazers_url}
              description={itm?.description}
              languageUrl={itm?.languages_url}
              updatedAt={itm?.updated_at}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
