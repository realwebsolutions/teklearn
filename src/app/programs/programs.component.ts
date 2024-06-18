import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  ngOnInit() {
    gsap.from('.card', {
      opacity: 0,
      borderRadius: '30%',
      duration: 2  ,
      ease: 'back.inOut',
      stagger: 0.2,
      backgroundColor: "blue", // camelCase

      onComplete: this.animateBorderRadius


      
     
    });
  }
  animateBorderRadius() {
    gsap.to('.card', {
      borderRadius: '20%',
      duration: 1,
      repeat: -1, // Infinite repeat
      yoyo: true, // Alternate direction
      ease: 'power1.inOut',
      stagger: 0.2,
      
    });
  }

  constructor(private router: Router) {}

  workshop() {
    this.router.navigate(['/workshop']);
  }
}
