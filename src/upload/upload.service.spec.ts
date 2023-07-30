import { Test, TestingModule } from '@nestjs/testing';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import supertest from 'supertest';
import { Readable } from 'stream';

describe('UploadController', () => {
  let controller: UploadController;
  let uploadService: UploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
      providers: [UploadService],
    }).compile();

    controller = module.get<UploadController>(UploadController);
    uploadService = module.get<UploadService>(UploadService);
  });

  it('should upload a file successfully', async () => {
    // Mock the uploadService's upload method
    const uploadServiceSpy = jest
      .spyOn(uploadService, 'upload')
      .mockResolvedValue({ message: 'Upload successful' } as any);

    // Create a mock file for testing
    const mockFile: Express.Multer.File = {
      fieldname: 'file',
      originalname: 'testfile.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      buffer: Buffer.from('Test file content'),
      size: 1000,
      destination: '/tmp',
      filename: 'testfile.jpg',
      path: '/tmp/testfile.jpg',
      stream: new Readable
    };

    // Perform the HTTP POST request to the /upload endpoint
    const response = await supertest(controller)
      .post('/upload')
      .attach('file', mockFile.buffer, { filename: mockFile.originalname });

    // Assert the response
    expect(response.status).toBe(200);
    expect(response.body).toBe('Upload successful');

    // Assert that the uploadService's upload method was called with the correct arguments
    expect(uploadServiceSpy).toHaveBeenCalledWith(
      mockFile.originalname,
      mockFile.buffer,
    );
  });

  it('should return "hello" on GET request to /', async () => {
    const response = await supertest(controller).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('hello');
  });
});
