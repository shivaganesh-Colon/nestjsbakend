import { S3 } from 'aws-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
@Injectable()
export class UploadService {


    constructor(private readonly configService: ConfigService) { }
    // private readonly s3Client = new S3Client({region:this.configService.getOrThrow('AWS_S3_REGION')

    bucketName = this.configService.get('BUCKET_NAME')
    // })
    s3 = new S3({
        region: this.configService.get('AWS_S3_REGION'),
        accessKeyId: this.configService.get('AWS_SCCESS_KEY'),
        secretAccessKey: this.configService.get('AWS_SECRETE_KEY'),
    })
    async upload(fileName: string, file: Buffer) {
        console.log(fileName, file)
        try {
            const uploadresult = await this.s3.upload(
                {
                    Bucket: this.bucketName,
                    Body: file,
                    Key: `${fileName}`,
                    ACL: 'public-read',
                    ContentDisposition: 'inline'

                }
            ).promise()
            return uploadresult
        } catch (error) {
            console.log(error)
        }

    }
}
