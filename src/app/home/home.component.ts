import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    gsap.from('.box', {
      x: 10,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.box',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
      },
      opacity: 0,
    ease: 'power1.inOut',
      duration: 2,
     
    });
    gsap.from('path', {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      duration: 2  ,
        ease: 'back.inOut',
      stagger: 0.2
    });
  
    // Animate the rectangles
    gsap.from('rect', {
      scaleX: 0,
      repeat: -1,
          yoyo: true,
      transformOrigin: 'left',
      duration: 2,
      ease: 'sine.inOut',
      stagger: 0.1,
    });
  
    // Animate the white shapes
    gsap.from('path[fill="white"]', {
      // repeat: -1,
      // yoyo: true,
      opacity: 0,
      duration: 2,
      ease: 'back.inOut',
      stagger: 0.2
    });
    const texts = [
      { selector: '#text1', text: 'Learn Smart' },
      { selector: '#text2', text: 'Grow Fast' },
      { selector: '#text3', text: 'Achieve More' }
    ];

    texts.forEach((item, index) => {
      gsap.fromTo(item.selector, {
        text: ''
      }, {
        text: item.text,
        yoyo: true,
        duration: 2,
        // delay: 1, // Stagger the animation start times
        ease: 'power2.inOut'
      });
    });

  }
  
  }

