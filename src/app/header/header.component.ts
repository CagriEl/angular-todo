import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // isim: any;


    callCenter: string;

  constructor(private testService: TestService) {

   }

  ngOnInit() {
    
this.callCenter = this.testService.callCenter;
    
    // var soyisim = 'EL'; // var yerine let veya const ile de tanımlanabilir, es6'dan sonra gelen bir özellik. 
                          // let = sabit değişmeyen bir içerik. Const değişebilen bir içerik için kullanılabilir.

    // this.isim = 'Çağrı';

}

}
