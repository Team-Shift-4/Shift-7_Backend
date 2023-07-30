import { Injectable } from '@nestjs/common';
import { request } from '../api/gitHubApi' 
import { FileListDto } from './dto/FileListDto';

@Injectable()
export class FileService {
    async getFileList() : Promise<FileListDto[]>{
        console.log('getContents')
        return (await request(
            'GET /repos/{owner}/{repo}/contents/{path}',
            {
            owner: 'ass3027',
            repo: 'test',
            path: '',
        })).data;
    }
}