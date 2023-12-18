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
export class SeriesComponent implements OnInit {



  serSerries = inject(SeriesService);
  series: Serie[] = [];
  serie: Serie = {} as Serie;

  ngOnInit(): void {
    this.serSerries.getSeries().subscribe((data: any) => {
      this.series = data.results;
    });
  }

  detail(id: any) {
    this.serSerries.getSerie(id).subscribe((data: any) => {
      this.serie = data;
      alert("Nombre Origianl: "+ this.serie.original_name + '\n\n' +'Puntación' + this.serie.vote_count +'\n\n'+ "descpocion :"+ this.serie.overview +'\n\n');

      console.log(data);
    });
  }
}
