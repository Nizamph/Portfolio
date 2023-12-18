import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { techSkill, softSkill } from '@/constants/constants';

const Skills = () => {
  const [mySkills, setMySkills] =
    useState<{ id: string; skill: string; percentage: number }[]>(techSkill);
  const [clickedItem, setClickedItem] = useState<string>('TechnicalSkills');

  const addNewSkillHandler = (skill: string) => {
    setClickedItem(skill);
    setMySkills(skill === 'TechnicalSkills' ? techSkill : softSkill);
  };
  return (
    <div className='w-full flex flex-col items-center justify-center  h-[546px]'>
      <div className='flex flex-col gap-11 p-10'>
        <h1 className='text-6xl text-center '>Skills</h1>
        <div className='flex '>
          <button
            className={`${
              clickedItem === 'TechnicalSkills'
                ? 'text-gray-600 border-t-2 border-r-2 border-l-2'
                : 'text-blue-700 border-b-2 '
            } rounded-sm h-6 w-[500px] border-gray-200`}
            onClick={() => addNewSkillHandler('TechnicalSkills')}>
            Technical skills
          </button>
          <button
            onClick={() => addNewSkillHandler('SoftSkills')}
            className={`${
              clickedItem === 'SoftSkills'
                ? 'text-gray-600 border-t-2 border-r-2 border-l-2'
                : 'text-blue-700 border-b-2 '
            } rounded-sm h-6 w-[500px] border-gray-200`}>
            Soft skills
          </button>
        </div>
        <div className='grid grid-cols-2 gap-x-5 gap-y-5'>
          {mySkills?.map((skill) => (
            <ProgressBar
              key={skill.id}
              percentage={skill.percentage}
              title={skill.skill}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
