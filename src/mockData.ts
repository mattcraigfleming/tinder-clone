import faker from 'faker';
import {IProfile} from './types/interface';

// Constants
// Mock data generation limit = 10
export const MOCKDATA_LIMIT = 40;

export const generateMockData = (dataPoints: number) => {
  // init empty profile
  let profiles: IProfile[] = [];
  // for each args(datapoint) generate mockData
  for (let i = 0; i < dataPoints; i++) {
    // TODO: Update ID generation to use uuidv4()
    const prof: IProfile = {
      id: (Math.floor(Math.random() * 100) + 1).toString() as string,
      name: faker.name.findName(),
      dob: faker.date.between('1930-01-01', '2000-01-05'),
      bio: faker.name.jobType(),
    };
    profiles.push(prof);
  }
  return profiles;
};
