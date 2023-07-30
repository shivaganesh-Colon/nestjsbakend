import { Controller, Get, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { request } from 'http';

@Controller('upload')
export class UploadController {
    constructor (private readonly uploadService:UploadService){}
    @Post()
    @UseInterceptors(FileInterceptor('file'))
   async uploadFile(@UploadedFile() file:Express.Multer.File,
      @Req() request,
      @Res() response){
        try{
           const res= await this.uploadService.upload(file.originalname,file.buffer)
           console.log(res)
            return res
        }catch(error){
            console.log(error)
        }
    
    }
    @Get()
    getHello(): string {
      return 'helo'
    }
}
