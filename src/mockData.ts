import faker from 'faker';
import {IProfile} from './types/interface';

export const generateMockData = (dataPoints: number) => {
  // init empty profile
  let profiles: IProfile[] = [];
  // For loop for each data points generate mockData
  for (let i = 0; i < dataPoints; i++) {
    const prof: IProfile = {
      id: (Math.floor(Math.random() * 100) + 1).toString() as string,
      name: faker.name.findName(),
      dob: faker.date.past(),
      bio: faker.name.jobType(),
    };
    profiles.push(prof);
  }
  return profiles;
};
