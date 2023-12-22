import { Octokit } from 'octokit';
import { writeFile } from 'fs';
import { OctokitResponse } from '@octokit/types';

function getApi(): Octokit {
  return new Octokit({
    auth: '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',
  });
}

async function request(url: string, config) {
  config['headers'] = { 'X-GitHub-Api-Version': '2022-11-28' };
  let result: OctokitResponse<any>;
  try {
    result = await getApi().request(url, config);
    return result;
  } catch (err) {
    if (err.status === 400) {
      console.log('error occurred');
      await saveFile(err.message);
    } else {
      console.log(err.message);
    }
    throw err;
  }
}

async function saveFile(target: any) {
  // console.log(target)
  writeFile('./errResult/result.html', target, (err) => {
    // console.log(1)
    if (err) {
      console.error(err);
    }
  });
}

export { request };
