// import { Test, TestingModule } from '@nestjs/testing';
import { request } from './api/gitHubApi'
import { OctokitResponse } from '@octokit/types';


async function getContents(): Promise<OctokitResponse<any>> {
  console.log('getContents')
  return await request(
    'GET /repos/{owner}/{repo}/contents/{path}',
    {
      owner: 'ass3027',
      repo: 'test',
      path: '',
  });
}



describe('github test', () => {

  test('connection test', async () => {
    const result = await getContents()

    expect(result).not.toBeNull()

    // await saveFile(result)
    // console.log(result);

  })

})