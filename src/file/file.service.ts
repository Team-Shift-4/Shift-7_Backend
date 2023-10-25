import { Injectable } from '@nestjs/common';
import { request } from '../api/gitHubApi';
import { FileListDto } from './dto/FileListDto';

@Injectable()
export class FileService {
  async getFileList(): Promise<FileListDto[]> {
    console.log('getContents');
    return (
      await request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'ass3027',
        repo: 'test',
        path: '',
      })
    ).data;
  }

  async getRepoList(): Promise<any> {
    let res = await request('GET /orgs/{org}/repos', {
      org: 'Team-Shift-4',
    });
    // const repoList: Repository[] = res.data.map((repo: any) => {
    const repoList = res.data.map((repo: any) => {
      return {
        name: repo.full_name,
        url: repo.url,
      };
    });
    console.log(repoList);
    return repoList;
  }
}
// interface Repository {
//   name: string;
//   url: string;
// }
