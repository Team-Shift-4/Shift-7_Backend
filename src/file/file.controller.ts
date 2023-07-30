import { Controller, Get, Param, Query } from '@nestjs/common';
import { FileService } from './file.service';
import { FileListDto } from './dto/FileListDto';

@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService) {}

    @Get('list')
    async getFileList(@Query() fileListDto : FileListDto) : Promise<FileListDto[]> {
        console.log(fileListDto);
        const result = await this.fileService.getFileList() ;
        return result;
    }
}

