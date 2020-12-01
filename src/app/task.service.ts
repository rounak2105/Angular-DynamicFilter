import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  createList(id:string){
    //add request
    return this.webRequestService.get();
  }

  addData(payload:Object){
    return this.webRequestService.get();
  }
  
  queryData(payload:Object){
    return this.webRequestService.postQ(payload);
  }

  addData2(id){
    return this.webRequestService.get2(id);
  }

}
