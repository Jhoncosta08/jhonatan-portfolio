import { Component } from '@angular/core';
import {TestimonialInterface} from './testimonial.interface';
import {testimonialData} from './testimonial.data';
import {NgForOf} from '@angular/common';
import {UtilsService} from '../../services/shared/utils.service';

@Component({
  selector: 'app-testimonials',
  imports: [NgForOf],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: TestimonialInterface[] = testimonialData;

  constructor(public utilService: UtilsService) {}
}
