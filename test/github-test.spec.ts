// import { Test, TestingModule } from '@nestjs/testing';
import { OctokitResponse } from '@octokit/types';
import { Octokit } from 'octokit';
import { writeFile } from 'fs';

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
  writeFile('./errResult/result.html', target, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

async function getContents(): Promise<OctokitResponse<any>> {
  return await request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'ass3027',
    repo: 'test',
    path: '',
  });
}

describe('github test', () => {
  test('connection test', async () => {
    const result = await getContents();
    expect(result).not.toBeNull();
  });
});
