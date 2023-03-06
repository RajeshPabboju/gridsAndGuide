import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { faker } from '@faker-js/faker';
import { AuditsService } from './Services/audits.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any = [];
  public audits:any[]= [];
  public totalCount=0;
  public pageIndex=0;
  public pageSize=10;
  Arr = Array;
  @ViewChild('uiElement', { static: false })
  uiElement!: ElementRef<any>;

  constructor(private auditsService: AuditsService) { 
  }

  public async ngOnInit(): Promise<void> {
    this.getData();
    await this.getAudits(this.pageIndex,this.pageSize);
    this.pageIndex +=1;
  }

  
  public async getAudits(pageIndex:any,pageSize:any){
    try {
      const response:any= await this.auditsService.getAudits(pageIndex,pageSize).toPromise();
      this.audits = [...this.audits,...response]
      this.totalCount = response.length;
    } catch (error) {
      console.log(error)
    }
  }

  public async onScrollLoadData(){
    const nativeElement= this.uiElement.nativeElement
    console.log(this.uiElement)
    if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight  &&  this.audits.length !== this.totalCount){
      await this.getAudits(this.pageIndex, this.pageSize);
      this.pageIndex +=1;
      // nativeElement.scrollTop=0;
    }
  }

  getData(){
    for(let i=0;i<20;i++){
      this.users.push(
        {
          id: `${i+1}`,
          userName: `${faker.name.firstName()} ${faker.name.lastName()}`,
          totalLoggedTime: faker.random.numeric(),
          idleTime: faker.random.numeric(),
          trainingTime: faker.random.numeric(),
          coordination: faker.random.numeric(),
          reviewTime: faker.random.numeric(),
          date: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
          hours: faker.random.numeric()
        }
      )
    }
  }
}
