import { Component } from '@angular/core';
import { HeaderComponent } from './root/header/header.component';
import { FooterComponent } from './root/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preston-res-web';
}
