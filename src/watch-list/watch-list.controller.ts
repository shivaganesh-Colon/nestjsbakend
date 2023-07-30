import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { type } from 'os';
import { CreateWatchListDto } from './dto/create-watch-list.dto';
import { WatchListService } from './watch-list.service';

@Controller('watch-list')
export class WatchListController {
// get /watchUsers-[]
@Get()
getWatches(@Query('type') wapon:'stars' | 'nunchuks'){
    const service = new WatchListService()
    return service.getWatchList(wapon)
}
// get /watchUsers/:id -.{...... }
@Get(':id')
getOneWatches(@Param('id') id:string){
    return {
       id
    }
}
//post /watchs/:id ->
@Post()
createWatch(@Body() CreateWatchListDto:CreateWatchListDto){
    return {name:CreateWatchListDto.name}
}

@Put(':id')
updateWatch(@Param('id') id:string){
    return {
        id
     }
}
//delete /watchs/:id ->
@Delete(':id')
deleteWatch(@Param('id') id:string){
    return {
        id
     }
}
}