import { Octokit } from 'octokit';
import { writeFile } from 'fs';
import { OctokitResponse } from '@octokit/types';
import { Logger } from '@nestjs/common';

let octokit = null;

const { log } = new Logger('gitHubApi');

function getApi(): Octokit {
  octokit ||
    (octokit = new Octokit({
      auth: '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',
    }));

  return octokit;
}

async function request(url: string, config) {
  log(`request url : ${url}`);
  config['headers'] = { 'X-GitHub-Api-Version': '2022-11-28' };
  let result: OctokitResponse<any>;
  try {
    result = await getApi().request(url, config);
    return result;
  } catch (err) {
    log('error occurred');
    if (err.status === 400) {
      await saveFile(err.message);
    } else {
      log(err.message);
    }
    throw err;
  }
}

async function saveFile(target: any) {
  writeFile('./errResult/result.html', target, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

export { request };
