import { Injectable } from '@nestjs/common';
import { request } from './api/gitHubApi';

interface Repository {
  name: string;
  url: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getList(): Promise<any> {
    let res = await request('GET /orgs/{org}/repos', {
      org: 'Team-Shift-4',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    const repoList: Repository[] = res.data.map((repo: any) => ({
      name: repo.full_name,
      url: repo.url,
    }));

    return repoList;
  }
}
