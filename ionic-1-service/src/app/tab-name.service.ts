import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabNameService {
  public tab1 = "First";
  public tab2 = "Second";
  public tab3 = "Third";
  constructor() { }
}
