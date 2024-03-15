import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  language       : string   = 'Telugu'; 
  listOfLanguages: string[] = ['English', 'Hindi', 'Spanish'];

  addLanguage(){
    console.log("addLanguage() called!");
    this.listOfLanguages.push(this.language);
    console.log(this.listOfLanguages);
  }

  deleteFirst(){
    this.listOfLanguages.splice(0,1)
  }
}  
