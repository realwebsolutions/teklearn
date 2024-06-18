import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  @ViewChild('textElement', { static: true }) textElement!: ElementRef;
    tl = gsap.timeline({ defaults: { duration: 2, ease: 'none' } });
  ngOnInit() {
    const text = 'TEKLEARN';
    gsap.to(this.textElement.nativeElement, {
      duration: 1,
      text: {
        value: text,
        newClass: 'scrambled-text',
        delimiter: '',
        speed: 0.2,
        padSpace: true,
      },
      ease: 'none',
    });
  }
}
