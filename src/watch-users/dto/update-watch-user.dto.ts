import { PartialType } from '@nestjs/mapped-types';
import { CreateWatchUserDto } from './create-watch-user.dto';

export class UpdateWatchUserDto extends PartialType(CreateWatchUserDto) {}
