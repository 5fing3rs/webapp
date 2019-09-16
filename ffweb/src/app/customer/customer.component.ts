import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
customers = [{name:'Tata Consultancy Services', logo:'./assets/customer/tcs.jpg'} ,
             {name:'Thanos Technologies', logo:'./assets/customer/thanos.png'} ,
             {name:'OpticVyu', logo:'./assets/customer/opticvyu.png' },
             {name:'DreavVu India', logo:'./assets/customer/dreamvu.png'},
             {name:'Pinoty Healthcare', logo:'./assets/customer/pinoty_logo.png'},
             {name:'Uton Energia', logo:'./assets/customer/uton_energia.png'},
             {name:'Alog Tech', logo:'./assets/customer/Alog_tech.png'},
             {name:'IoT Suitcase', logo:'./assets/customer/iot_suitcase.jpg'},
            {name: 'Cadd Grafix', logo:'./assets/customer/Cadd_grafix.jpg'}
            ];
  constructor() { }

  ngOnInit() {
  }

}
