import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public banner =[  {topic:"About Us", 
      description: "Five Fingers Innovative Solutions is a government recognized startup, under StartupIndia program, we provide training and services related to 3D Printing, to enhance quality of life, our biomedical 3D printing program is targeted to enhance quality of life and improve healthcare services in remote areas using 3D printing and other upcoming technologies."
      , image: "assets/carousel/slide-1.jpg", evenflag: true}
     ]  
public homesection = [
      {topic:"3D in Healthcare", description: "We reconstruct 3D models of internal organs and medical condition using CT Scan , MRI Scan, Ultrasound scan of the patient, This helps in checking the alignment of prosthetics, performing simulation of surgery or medical procedure and analysis of patient condition", image: "assets/carousel/brain-1.jpg", evenflag: false},  
      {topic:"3D Printing Services", description: "We help innovators, enterpreneurs and manufacturer, to reduce their cost of prototypes, we provide 3D Designing, 3D scanning and 3D printing services at competitive prices. We also have social responsibility program to provide assistance using 3D printing to weaker sections.", 
      image: "assets/carousel/slide-4.jpg",evenflag: true},
      {topic:"3D Printing Education", description: "To promote 3D printing in institutes and businesses in India and to equip people with 3D printing skills, we have designed a well structured certification program in 3D Printing and 3D Healthcare, which helps learners to transform, comceptualize, model and print ideas to real models.", image: "assets/carousel/slide-2.jpg", evenflag: false}
    ];

 public newssection = [
      {topic:"3D Reconstruction Workshop at NEC, Guntur", description: "On August 10, 2019. We participated in faculty development program in Bio-medical enginggering, organized at Narasaraopet Engineering College, and conducted workshop on 3D reconstruction of human organs from medical scan.", image: "assets/news/NEC-Aug10.jpg"},  
      {topic:"Exhibiting at Anurag Group of institutions, Ghatkesar", description: "On July 25, 2019, We exhibited 3D Printing and its implementation in various industries", 
      image: "assets/news/Anurag-Jul25.jpg"},
      {topic:"Startup Stage Innovators at BioAsia 2019", description: "To promote 3D printing in institutes and businesses in India and to equip people with 3D printing skills, we have designed a well structured certification program in 3D Printing and 3D Healthcare, which helps learners to transform, comceptualize, model and print ideas to real models.", image: "assets/news/bioasia-2019.jpg"},
      {topic:"3D Printing for Students", description: "To promote 3D printing in institutes and businesses in India and to equip people with 3D printing skills, we have designed a well structured certification program in 3D Printing and 3D Healthcare, which helps learners to transform, comceptualize, model and print ideas to real models.", image: "assets/news/Kids-Training.jpg"}
    ];   
  constructor() { }

  ngOnInit() {
    
  }

}
