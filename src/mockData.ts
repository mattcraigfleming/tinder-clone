import {uuid} from 'uuidv4';
import faker from 'faker';

const generateMockData = (dataPoints: number) => {
  let profiles = [];
  for (dataPoints = 0; dataPoints < 10; dataPoints++) {
    const prof = {
      id: uuid(),
      name: faker.name.findName(),
      dob: faker.date.past(),
      bio: faker.name.jobType(),
    };
    profiles.push(prof);
    return profiles;
  }
};
