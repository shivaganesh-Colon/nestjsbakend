import { Injectable } from '@nestjs/common';

@Injectable()
export class WatchListService {
    private watchList =[
        {id:1,name:'shiva',weapon:'stars'},
        {id:2,name:'Raj',weapon:'nunchuks'},
    ];
    getWatchList(wapon?:'stars' | 'nunchuks'){
        if(wapon){
            return this.watchList.filter((ninja)=>ninja.weapon === wapon)
        }
        return this.watchList
    }
}
