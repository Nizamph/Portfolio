import React, { useEffect, useState } from 'react';
import Card from './UI/Card';
import useFormattedDate from '@/customHooks/useFormattedDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface LanguageStats {
  [key: string]: number;
}

type GithubStatProps = {
  repoName: string | undefined;
  description: string;
  languageUrl: string;
  updatedAt: string;
  star: string;
};

const GithubStat = ({
  repoName,
  description,
  languageUrl,
  updatedAt,
  star,
}: GithubStatProps) => {
  const [languages, setLanguages] = useState<LanguageStats>({});
  const [totalLang, setTotalLang] = useState(0);
  const formattedDate: string = useFormattedDate(updatedAt);
  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    let total = Object.values(languages).reduce((a, b) => a + b, 0);
    setTotalLang(total);
  }, [languages]);

  const getLanguages = async () => {
    try {
      const res = await fetch(`${languageUrl}`);
      const data: LanguageStats = await res.json();
      console.log('allLanguages', data);
      setLanguages(data);
    } catch (error) {
      console.error('Error fetching languages:', error);
    }
  };
  console.log('rendering');
  return (
    <Card>
      <div className='p-2 m-2  max-w-[600px] flex flex-col gap-2 justify-center max-h-[205px]'>
        <h2 className='font-bold text-lg'>{repoName}</h2>
        <p>{description}</p>
        <div className='flex items-center justify-start gap-5'>
          <a className='p-2 px-4 border-gray-600 border-solid border-[1px] cursor-pointer text-gray-600 rounded-lg flex justify-normal gap-2 items-center hover:bg-gray-700'>
            <FontAwesomeIcon
              className={'text:gray hover:text-white'}
              icon={faGithub}
            />{' '}
            Clone Repo
          </a>
          <a className='p-2 px-3 border-gray-600 border-solid border-[1px] cursor-pointer text-gray-600 rounded-lg flex justify-normal gap-2 items-center hover:bg-gray-700'>
            <FontAwesomeIcon
              className={'text:gray hover:text-white'}
              icon={faGithub}
            />{' '}
            Repo
          </a>
        </div>
        <div className='items-center justify-center'>
          <div className='w-full bg-gray-300 h-1 rounded-full'></div>
        </div>
        <div className='flex w-full items-center justify-start gap-4'>
          <p>Languages:</p>
          {Boolean(totalLang) ? (
            Object.keys(languages).map((language) => (
              <p key={language}>
                {language}:{' '}
                {((languages[language] / totalLang) * 100).toFixed(2)}%
              </p>
            ))
          ) : (
            <>Not found</>
          )}
        </div>
        <p></p>
        <div className='flex items-center gap-4'>
          <button>Stars</button>
          <p className=''>Updated on {formattedDate}</p>
        </div>
      </div>
    </Card>
  );
};

export default GithubStat;
