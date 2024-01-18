import { Controller, Get, Logger, Query } from '@nestjs/common';
import { FileService } from './file.service';
import { FileDto } from './dto/FileListDto';

@Controller('file')
export class FileController {
  constructor(
    private readonly fileService: FileService,
    private readonly logger: Logger,
  ) {}
  @Get('list')
  async getFileList(@Query() fileDto: FileDto): Promise<FileDto[]> {
    this.logger.log(fileDto);
    const result = await this.fileService.getFileList(fileDto);
    return result;
  }

  @Get('repo-list')
  async getRepoList(@Query() teamName: string) {
    console.log(teamName);
    return await this.fileService.getRepoList();
  }
}
