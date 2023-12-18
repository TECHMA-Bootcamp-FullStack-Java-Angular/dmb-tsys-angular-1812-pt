import { Component, OnInit, inject } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Serie } from '../../models/Serie';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent  implements OnInit{


  serSerries = inject(SeriesService);
  series: Serie[] = [];

  ngOnInit(): void {
    this.serSerries.getSeries().subscribe((data: any) => {
      this.series = data.results;
      console.log(this.series);
    });
  }

}
